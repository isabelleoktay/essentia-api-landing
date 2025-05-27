import BackgroundCard from "../cards/BackgroundCard";
import Legend from "./Legend";
import Intro from "../text/Intro";

const ChartDisplay = ({
  Chart,
  chartData,
  className,
  fullWidth = false,
  color = "black",
  padding = "large",
  title = "feature",
  topMargin = "none",
  showLegend = false,
  xLabels,
  baseColor,
  width = 300,
  height = 300,
  i,
}) => {
  const baseGraphClasses = `flex items-center justify-center h-full w-full`;

  const topMarginClasses = {
    none: "mt-0",
    small: "mt-4",
    medium: "mt-8",
    large: "mt-12",
  };

  const chartPaddingClasses = {
    small: "py-2",
    medium: "py-4",
    large: "py-6",
  };

  return (
    <BackgroundCard
      i={i}
      color={color}
      fullWidth={fullWidth}
      padding={padding}
      className={`${className} relative h-full`}
    >
      <Intro color="white" size="medium" className="absolute top-4 left-6">
        {title}
      </Intro>
      {showLegend ? (
        <div className="flex flex-row items-center justify-between gap-4">
          <Legend data={chartData} className="flex-shrink-0" />
          <div className="flex-grow">
            <Chart
              baseColor={baseColor}
              data={chartData}
              width={width}
              height={height}
              className={`${topMarginClasses[topMargin]} ${chartPaddingClasses[padding]}`}
              xLabels={xLabels}
            />
          </div>
        </div>
      ) : (
        <div className={`${baseGraphClasses}`}>
          <Chart
            data={chartData}
            width={width}
            height={height}
            className={`${topMarginClasses[topMargin]} ${chartPaddingClasses[padding]}`}
            xLabels={xLabels}
          />
        </div>
      )}
    </BackgroundCard>
  );
};
export default ChartDisplay;
