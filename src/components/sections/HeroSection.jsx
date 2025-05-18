import { forwardRef } from "react";
import Heading from "../text/Heading";
import Text from "../text/Text";
import Button from "../buttons/Button";
import Intro from "../text/Intro";
import Carousel from "../cards/Carousel";
import TextHighlight from "../text/TextHighlight";

const HeroSection = forwardRef(({ companies }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url(./assets/images/background.png)] bg-top bg-no-repeat bg-[length:100vw_auto] flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 w-full"
    >
      <div className="flex flex-col items-center justify-center gap-36 w-1/2">
        <div className="flex flex-col items-center justify-center">
          <Heading size="large" className="p-8">
            Analyze your entire library.
          </Heading>
          <Text className="w-3/4 mb-8">
            Built by the Music Technology Group, our AI tools bring scalable,
            intelligent audio analysis to your entire music library.
          </Text>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button type="primary" size="large">
              Start for free
            </Button>
            <Button type="secondary" size="large">
              Try the extended demo
            </Button>
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
});

export default HeroSection;
