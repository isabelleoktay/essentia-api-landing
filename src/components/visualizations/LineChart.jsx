import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineChart = ({ data, xLabels, showLabels = true }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Dynamically calculate the width of the parent container
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setWidth(width);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!data || !data.length || !xLabels || !xLabels.length || width === 0)
      return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 40, bottom: 40, left: 10 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = 200 - margin.top - margin.bottom;

    // Gather all Y values across lines
    const allYValues = data.flatMap((d) => d.dataPoints);
    const yMin = d3.min(allYValues);
    const yMax = d3.max(allYValues);

    // X scale using labels (e.g. timestamps)
    const xScale = d3
      .scalePoint()
      .domain(xLabels)
      .range([0, innerWidth])
      .padding(0.5);

    // Y scale
    const yScale = d3
      .scaleLinear()
      .domain([yMin, yMax])
      .range([innerHeight, 0])
      .nice();

    // Create axes
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(
        xLabels.filter((_, i) => i % Math.ceil(xLabels.length / 10) === 0)
      ); // Show only 10 evenly spaced labels

    // Append main group
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Draw X-axis
    const xAxisGroup = g
      .append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis);

    // Conditionally show or hide labels
    if (!showLabels) {
      xAxisGroup.selectAll("text").remove(); // Remove text labels
    } else {
      xAxisGroup.selectAll("text").attr("fill", "white");
    }

    // Make the X-axis line and ticks transparent
    g.select(".domain").attr("stroke", "transparent");
    g.selectAll(".tick line").attr("stroke", "transparent");

    // Draw each line
    data.forEach((lineData) => {
      const { dataPoints, color = "#f7f8f9" } = lineData;

      const lineGenerator = d3
        .line()
        .x((_, i) => xScale(xLabels[i]))
        .y((d) => yScale(d))
        .curve(d3.curveBasis);

      g.append("path")
        .datum(dataPoints)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("d", lineGenerator)
        .style("filter", `drop-shadow(0px 0px 5px ${color})`);
    });
  }, [data, xLabels, width, showLabels]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg ref={svgRef} width={width} height={200} />
    </div>
  );
};

export default LineChart;
