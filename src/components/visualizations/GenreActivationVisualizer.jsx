import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { customColorScale } from "../../utils/customColorScale";
const GenreActivationVisualizer = ({ data }) => {
  console.log(data);
  const svgRef = useRef();
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setSelectedGenre(Object.keys(data)[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data && Object.keys(data).length !== 0 && selectedGenre) {
      console.log("Rendering visualization for genre:", selectedGenre);
      const width = 500;
      const height = 500;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      // Tooltip div (absolute positioned, hidden by default)
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("padding", "6px 10px")
        .style("background", "rgba(20, 20, 22, 0.5)")
        .style("color", "#f7f8f9")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("pointer-events", "none")
        .style("opacity", 0);

      const selectedGenreData = data[selectedGenre];
      const radiusScale = d3
        .scaleSqrt()
        .domain([0, d3.max(selectedGenreData, (d) => d.activation)])
        .range([10, 50]);

      const color = customColorScale(selectedGenreData.map((d, i) => i));

      const nodes = svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("g")
        .data(selectedGenreData)
        .enter()
        .append("g");

      nodes
        .append("circle")
        .attr("r", (d) => radiusScale(d.activation))
        .attr("fill", (d, i) => color(i))
        // Tooltip behavior for activations < 0.5 only
        .on("mouseover", function (event, d) {
          if (d.activation < 0.5) {
            tooltip
              .style("opacity", 1)
              .html(
                `<strong>${d.subgenre}</strong><br/>${d.activation.toFixed(2)}`
              );
          }
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });

      // Only append subgenre text for activations >= 0.5
      nodes
        .filter((d) => d.activation >= 0.5)
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "-0.2em")
        .attr("fill", "#141416")
        .style("font-size", "11px")
        .style("pointer-events", "none")
        .text((d) => d.subgenre);

      // Only append activation text for activations >= 0.5
      nodes
        .filter((d) => d.activation >= 0.5)
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1em")
        .attr("fill", "#333")
        .style("font-size", "10px")
        .style("pointer-events", "none")
        .text((d) => d.activation.toFixed(2));

      const simulation = d3
        .forceSimulation(selectedGenreData)
        .force("x", d3.forceX().strength(0.05))
        .force("y", d3.forceY().strength(0.05))
        .force(
          "collide",
          d3.forceCollide((d) => radiusScale(d.activation) + 2).strength(1)
        )
        .alphaDecay(0.02)
        .on("tick", () => {
          nodes.attr("transform", (d) => `translate(${d.x},${d.y})`);
        });

      return () => {
        simulation.stop();
        tooltip.remove(); // Clean up tooltip div on unmount or rerun
      };
    }
  }, [selectedGenre, data]);

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex flex-wrap justify-start items-start gap-2 mt-6">
        {Object.keys(data).map((genre) => (
          <div
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`${
              genre === selectedGenre
                ? "text-offwhite"
                : "text-offwhite/50 hover:text-offwhite/75"
            } transition cursor-pointer text-xs`}
          >
            {genre}
          </div>
        ))}
      </div>
      <svg ref={svgRef} style={{ display: "block", margin: "auto" }} />
    </div>
  );
};

export default GenreActivationVisualizer;
