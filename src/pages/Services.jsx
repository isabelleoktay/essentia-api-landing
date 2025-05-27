import { useRef, useState, useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import HeroSection from "../components/sections/HeroSection";
import TextHighlight from "../components/text/TextHighlight";
import Text from "../components/text/Text";
import Heading from "../components/text/Heading";
import metadata from "../data/metadata";
import MetadataCard from "../components/cards/MetadataCard";
import CallToActionSection from "../components/sections/CallToActionSection";
import Footer from "../components/navigation/Footer";
import ServicesCards from "../components/cards/ServicesCards";
import { servicesPageServices } from "../data/services";

const buttons = [
  { label: "Start for free", type: "primary", size: "large" },
  { label: "Try the extended demo", type: "secondary", size: "large" },
];

const heading = (
  <>
    Music Metadata{" "}
    <TextHighlight color="multigradient">Solutions</TextHighlight>
  </>
);

const subheading =
  "Our state of the art algorithms for music analysis and tagging deliver advanced detailed metadata for any song.";

const Services = () => {
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
        heading={heading}
        subheading={subheading}
        buttons={buttons}
        bgImage={false}
        bgColor="gradient"
      />
      <div className="flex flex-col w-full bg-offwhite py-48">
        <div className="flex flex-col w-5/8 mx-auto gap-40">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <Heading size="small" color="black" weight="medium" align="left">
                Audio Analysis Solutions for
              </Heading>
              <Heading size="medium" color="black" align="left">
                <TextHighlight color="multigradient">
                  Enhanced Music Metadata
                </TextHighlight>
              </Heading>
              <Text size="large" color="black" align="left">
                Extract the following metadata and more using our state of the
                art algorithms.
              </Text>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {metadata.map((item, index) => (
                <MetadataCard
                  key={index}
                  Icon={item.icon}
                  heading={item.heading}
                  subheading={item.subheading}
                />
              ))}
            </div>
          </div>
          <ServicesCards services={servicesPageServices} />
        </div>
      </div>
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Services;
