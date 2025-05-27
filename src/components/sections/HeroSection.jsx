import { forwardRef } from "react";
import Heading from "../text/Heading";
import Text from "../text/Text";
import Button from "../buttons/Button";
import Intro from "../text/Intro";
import Carousel from "../cards/Carousel";
import TextHighlight from "../text/TextHighlight";
import companies from "../../data/companies";

const HeroSection = forwardRef(
  (
    { buttons, heading, subheading, bgImage = true, bgColor = "black" },
    ref
  ) => {
    const bgColorClasses = {
      white: "bg-offwhite",
      black: "bg-blueblack",
      coral: "bg-coral",
      blue: "bg-brightblue",
      gradient: "bg-gradient-to-b from-blueblack via-blueblack to-brightblue",
    };

    return (
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 w-full ${
          bgImage
            ? "bg-[url(./assets/images/background.png)] bg-top bg-no-repeat bg-[length:100vw_auto]"
            : bgColorClasses[bgColor]
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-36 w-1/2">
          <div className="flex flex-col items-center justify-center">
            <Heading size="large" className="p-8">
              {heading}
            </Heading>
            <Text className="w-3/4 mb-8">{subheading}</Text>
            <div className="flex flex-row items-center justify-center gap-4">
              {buttons.map((button, index) => (
                <Button key={index} type={button.type} size={button.size}>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <Intro color="white" size="medium">
              Used by{" "}
              <TextHighlight color="multigradient">
                industry leaders
              </TextHighlight>
            </Intro>
            <Carousel images={companies} />
          </div>
        </div>
      </div>
    );
  }
);

export default HeroSection;
