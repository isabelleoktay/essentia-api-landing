import Intro from "../text/Intro";
import TextHighlight from "../text/TextHighlight";

const MtgLogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-blueblack to-brightblue p-12">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-7xl px-4 py-8 mx-auto gap-2">
        <Intro color="white" size="large" className="text-center">
          powered by{" "}
          <TextHighlight color="multigradient">essentia</TextHighlight>
        </Intro>
        <img
          src="/logos/mtg_upf.svg"
          alt="MTG Logo"
          className="lg:h-16 md:h-12 sm:h-8"
        />
      </div>
    </div>
  );
};

export default MtgLogoSection;
