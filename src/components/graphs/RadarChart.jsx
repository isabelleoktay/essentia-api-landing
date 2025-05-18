import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const RadarChart = ({ data, width = 300, height = 300 }) => {
  const ref = useRef();
  const [labelSizes, setLabelSizes] = useState([]);
  const labelRefs = useRef([]);

  const paddingX = 20;
  const paddingY = 0;
  const radius = Math.min(width - paddingX * 2, height - paddingY * 2) / 2;

  const centerX = width / 2;
  const centerY = height / 2;
  const angleSlice = (2 * Math.PI) / data.length;

  // Calculate label positions and angles
  const labelPositions = data.map((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const x = centerX + Math.cos(angle) * (radius + 20);
    const y = centerY + Math.sin(angle) * (radius + 20);
    return { ...d, x, y, angle };
  });

  // Measure label sizes after render
  useEffect(() => {
    setLabelSizes(
      labelRefs.current.map((el) =>
        el
          ? { width: el.offsetWidth, height: el.offsetHeight }
          : { width: 0, height: 0 }
      )
    );
  }, [data]);

  // D3 rendering for lines and area only (no labels)
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const rScale = d3.scaleLinear().domain([0, 1]).range([0, radius]);

    const radarLine = d3
      .lineRadial()
      .radius((d) => rScale(d.value))
      .angle((d, i) => i * angleSlice)
      .curve(d3.curveLinearClosed);

    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`);

    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const lineCoord = [Math.cos(angle) * radius, Math.sin(angle) * radius];

      g.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", lineCoord[0])
        .attr("y2", lineCoord[1])
        .attr("stroke", "#f7f8f9")
        .attr("stroke-width", 1);
    });

    g.append("path")
      .datum(data)
      .attr("d", radarLine)
      .attr("fill", "url(#gradient)")
      .attr("stroke", "#320bff")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.2)
      .attr("fill-opacity", 0.6);

    svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#320bff" },
        { offset: "100%", color: "#090036" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);
  }, [data, height, width, centerX, centerY, radius, angleSlice]);

  return (
    <div style={{ position: "relative", width, height }}>
      <svg ref={ref} width={width} height={height} />
      {labelPositions.map((d, i) => {
        const size = labelSizes[i] || { width: 0, height: 0 };
        // Normalize angle to [-PI, PI]
        let angle = d.angle;
        while (angle < -Math.PI) angle += 2 * Math.PI;
        while (angle > Math.PI) angle -= 2 * Math.PI;
        // Convert to degrees for easier logic
        const deg = (angle * 180) / Math.PI;

        let left = d.x;
        let top = d.y;

        // Top (deg ≈ -90) or Bottom (deg ≈ 90): center horizontally
        if (Math.abs(deg + 90) < 30 || Math.abs(deg - 90) < 30) {
          left = d.x - size.width / 2;
          top = d.y - size.height / 2;
        }
        // Right side (deg ≈ 0): align left edge
        else if (deg > -60 && deg < 60) {
          left = d.x;
          top = d.y - size.height / 2;
        }
        // Left side (deg > 120 or deg < -120): align right edge
        else if (deg > 120 || deg < -120) {
          left = d.x - size.width;
          top = d.y - size.height / 2;
        }
        // Diagonals: center horizontally (fallback)
        else {
          left = d.x - size.width / 2;
          top = d.y - size.height / 2;
        }

        return (
          <div
            key={i}
            ref={(el) => (labelRefs.current[i] = el)}
            style={{
              position: "absolute",
              left,
              top,
            }}
            className="text-offwhite text-small font-medium pointer-events-none whitespace-nowrap"
          >
            {d.label}{" "}
            <span className="opacity-50">{Math.round(d.value * 100)}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadarChart;
