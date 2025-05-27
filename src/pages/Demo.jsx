import DemoSection from "../components/sections/DemoSection";
import MtgLogoSection from "../components/sections/MtgLogoSection";
import CallToActionSection from "../components/sections/CallToActionSection";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

const Demo = () => {
  return (
    <div className="w-full">
      <NavBar color="dark" />
      <DemoSection />
      <MtgLogoSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};
export default Demo;
