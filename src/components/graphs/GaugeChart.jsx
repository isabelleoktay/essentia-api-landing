import { GaugeComponent } from "react-gauge-component";

const GaugeChart = ({ data, width = 100, height = 150, className }) => {
  const white = "#f7f8f9";
  return (
    <GaugeComponent
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      type="semicircle"
      id="gauge-component4"
      arc={{
        gradient: true,
        width: 0.1,
        padding: 0,
        subArcs: [
          {
            limit: 25,
            color: "#090036",
            showTick: true,
          },
          {
            limit: 50,
            color: "#320bff",
            showTick: true,
          },
          {
            limit: 75,
            color: "#e53845",
            showTick: true,
          },
          { color: "#fe8a93" },
        ],
      }}
      value={data[0].value}
      labels={{
        valueLabel: {
          style: { textShadow: "none", fill: white },
        },
        tickLabels: {
          defaultTickValueConfig: {
            style: {
              textShadow: "none",
              fill: white,
              fontSize: "12px",
              opacity: 0.5,
            },
          },
          defaultTickLineConfig: { color: white },
        },
      }}
      pointer={{ type: "arrow", elastic: true, color: white, width: 10 }}
    />
  );
};

export default GaugeChart;
