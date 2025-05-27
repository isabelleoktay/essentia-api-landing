import React from "react";
import Heading from "../text/Heading";
import Divider from "../ui/Divider";
import Text from "../text/Text";
import Button from "../buttons/Button";
import Intro from "../text/Intro";
import BackgroundCard from "./BackgroundCard";

const PricingCard = ({
  title,
  description,
  items,
  buttonText,
  buttonDisabled = false,
  introColor = "white",
  cardColor = "white",
  buttonType = "default",
}) => {
  return (
    <div className="flex flex-col gap-2 w-3/8 min-w-1/3">
      <Intro size="large" color={introColor}>
        {title}
      </Intro>
      <BackgroundCard
        color={cardColor}
        padding="large"
        className="flex flex-col h-[600px]"
      >
        <Heading size="small" color="white" weight="medium" align="left">
          {description}
        </Heading>
        <Divider color="white" margin="large" />
        <div className="flex flex-col justify-between gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-row items-center gap-2">
              <div className="rounded-full h-4 w-4 bg-linear-to-r from-brightblue to-coral"></div>
              <Text color="white" size="medium" align="left" font="mono">
                {item}
              </Text>
            </div>
          ))}
        </div>
        <Button
          disabled={buttonDisabled}
          type={buttonType}
          size="large"
          className="mt-auto"
        >
          {buttonText}
        </Button>
      </BackgroundCard>
    </div>
  );
};

export default PricingCard;
