import Heading from "../text/Heading";
import Text from "../text/Text";
import Button from "../buttons/Button";
// import RoundedFrameCard from "./RoundedFrameCard";
import TextHighlight from "../text/TextHighlight";
import BackgroundCard from "./BackgroundCard";
import Intro from "../text/Intro";

const ServiceCard = ({
  intro,
  title,
  subtitle,
  description,
  buttonText,
  textSize = "medium",
  buttonType = "primary",
  buttonSize = "medium",
  onButtonClick,
  chartComponent,
  reverse = false,
}) => {
  const textSizeClasses = {
    medium: { title: "medium", subtitle: "small", description: "small" },
    large: { title: "medium", subtitle: "medium", description: "large" },
  };

  console.log(intro);

  return (
    <div
      className={`flex gap-24 items-start ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-col justify-start gap-6 w-1/2">
        <div>
          {intro && (
            <Intro size="large" color="coral" className="mb-2">
              {intro}
            </Intro>
          )}
          <Heading
            size={textSizeClasses[textSize].title}
            color="black"
            align="left"
            className="mb-1"
          >
            <TextHighlight color="multigradient">{title}</TextHighlight>
          </Heading>
          <Heading
            size={textSizeClasses[textSize].subtitle}
            color="black"
            align="left"
          >
            {subtitle}
          </Heading>
        </div>
        <Text
          size={textSizeClasses[textSize].description}
          color="black"
          align="left"
        >
          {description}
        </Text>
        {buttonText && (
          <Button
            type={buttonType}
            size={buttonSize}
            className="w-fit"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>

      {/* Chart Component */}
      {chartComponent && (
        <div className="w-1/2">
          <BackgroundCard
            fullWidth={true}
            color="translucent"
            className="flex items-center justify-center p-10"
          >
            {chartComponent}
          </BackgroundCard>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
