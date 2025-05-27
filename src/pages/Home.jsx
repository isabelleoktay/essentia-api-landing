import { useRef, useState, useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import HeroSection from "../components/sections/HeroSection";
import MtgLogoSection from "../components/sections/MtgLogoSection";
import Footer from "../components/navigation/Footer";
import CallToActionSection from "../components/sections/CallToActionSection";
import DemoSection from "../components/sections/DemoSection";
import ServicesSection from "../components/cards/ServicesCards";
import { homePageServices } from "../data/services";

console.log(homePageServices);

const buttons = [
  { label: "Start for free", type: "primary", size: "large" },
  { label: "Try the extended demo", type: "secondary", size: "large" },
];

const heading = "Analyze your entire library.";
const subheading =
  "Built by the Music Technology Group, our AI tools bring scalable, intelligent audio analysis to your entire music library.";

const Home = () => {
  const heroRef = useRef(null);
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setNavDark(!entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-64px 0px 0px 0px", // adjust -64px to your NavBar height
      }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans w-full min-h-screen bg-blueblack overflow-x-hidden">
      <NavBar color={navDark ? "dark" : "default"} />
      <HeroSection
        ref={heroRef}
        buttons={buttons}
        heading={heading}
        subheading={subheading}
      />
      <div className="flex flex-col w-full bg-offwhite py-24">
        <div className="w-5/8 mx-auto">
          <ServicesSection
            services={homePageServices}
            bgColor="white"
            textSize="large"
          />
        </div>
      </div>
      <DemoSection />
      <MtgLogoSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Home;
