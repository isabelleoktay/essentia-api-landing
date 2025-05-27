import companies from "../../data/companies";
import Carousel from "../cards/Carousel";
import Intro from "../text/Intro";
import TextHighlight from "../text/TextHighlight";

const LogosSection = ({ bgColor = "white", className }) => {
  const baseClasses = "flex flex-col items-center justify-center w-full";
  const bgClasses = {
    white: "bg-offwhite",
    black: "bg-blueblack",
    multigradient: "bg-linear-to-b from-blueblack via-brightblue to-coral",
  };

  return (
    <div className={`${baseClasses} ${bgClasses[bgColor]} ${className}`}>
      <div className="flex flex-col items-center justify-center w-1/2 gap-6 p-24">
        <Intro color="white" size="large" align="center">
          used by <span className="text-coral">industry leaders</span>
        </Intro>
        <Carousel images={companies} />
      </div>
    </div>
  );
};

export default LogosSection;
