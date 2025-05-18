import { useEffect, useRef } from "react";
import * as d3 from "d3";

const LayeredDonutChart = ({ data, width = 300, height = 300 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear previous content

    const cx = width / 2;
    const cy = height / 2;
    const ringWidth = 20;
    const spacing = 5;

    const radius = Math.min(width, height) / 2;

    data.forEach((d, i) => {
      const outerRadius = radius - i * (ringWidth + spacing);
      const innerRadius = outerRadius - ringWidth;

      const arcBackground = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(2 * Math.PI);

      const arcValue = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(2 * Math.PI * d.value);

      const group = svg
        .append("g")
        .attr("transform", `translate(${cx}, ${cy})`);

      group.append("path").attr("d", arcBackground()).attr("fill", "#6d2c38");

      group.append("path").attr("d", arcValue()).attr("fill", d.color);
    });
  }, [data, width, height]);

  return <svg ref={ref} width={width} height={height}></svg>;
};

export default LayeredDonutChart;
