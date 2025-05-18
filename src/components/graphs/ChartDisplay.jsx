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
        <div className={`flex flex-row items-center justify-between gap-4`}>
          <Legend data={chartData} />
          <div className={`${baseGraphClasses}`}>
            <Chart
              data={chartData}
              width={width}
              height={height}
              className={`${topMarginClasses[topMargin]} ${chartPaddingClasses[padding]}`}
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
          />
        </div>
      )}
    </BackgroundCard>
  );
};
export default ChartDisplay;
