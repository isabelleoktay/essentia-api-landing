import { useState, useEffect, useRef } from "react";
import NavBar from "../components/navigation/NavBar";
import Heading from "../components/text/Heading";
import TextHighlight from "../components/text/TextHighlight";
import Text from "../components/text/Text";
import PricingCard from "../components/cards/PricingCard";
import LogosSection from "../components/sections/LogosSection";
import CallToActionSection from "../components/sections/CallToActionSection";
import Footer from "../components/navigation/Footer";

const basicPlan = [
  "Start with free tokens",
  "Access via web interface or API",
  "No commitment",
  "Pay per analysis",
];

const customPlan = ["Custom onboarding", "Priority support", "Custom pricing"];

const pricingCards = [
  {
    title: "basic",
    description: "Best for those starting out",
    items: basicPlan,
    buttonText: "Coming soon!",
    buttonDisabled: true,
    introColor: "white",
    cardColor: "white",
    buttonType: "disabled",
  },
  {
    title: "custom",
    description: "Looking for custom solutions?",
    items: customPlan,
    buttonText: "Contact us",
    buttonDisabled: false,
    introColor: "coral",
    cardColor: "translucent",
    buttonType: "primary",
  },
];

const Pricing = () => {
  const heroRef = useRef(null);
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:", entry.isIntersecting);

        setNavDark(!entry.isIntersecting);
      },
      {
        threshold: 0.75,
        rootMargin: "-64px 0px 0px 0px", // adjust -64px to your NavBar height
      }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans w-full min-h-screen bg-blueblack overflow-x-hidden">
      <NavBar color={navDark ? "dark" : "default"} />
      <div
        ref={heroRef}
        className="bg-[url(./assets/images/background.png)] bg-top bg-no-repeat bg-[length:100vw_auto] flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blueblack/80 to-blueblack"></div>
        <div className="flex flex-col items-center justify-center gap-12 w-5/8 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <Heading size="large" weight="medium" className="p-8">
              Plans built for{" "}
              <TextHighlight color="multigradient">scale.</TextHighlight>
            </Heading>
            <Text color="gray" size="medium" className="w-1/2">
              Our product is currently in early access. We're working with
              select partners to tailor solutions for their needs.
            </Text>
          </div>
          <div className="flex flex-row justify-center gap-10 w-full">
            {pricingCards.map((card, i) => (
              <PricingCard
                key={i}
                title={card.title}
                description={card.description}
                items={card.items}
                buttonText={card.buttonText}
                buttonDisabled={card.buttonDisabled}
                introColor={card.introColor}
                cardColor={card.cardColor}
                buttonType={card.buttonType}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blueblack h-[100px]"></div>
      <LogosSection bgColor="multigradient" />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Pricing;
