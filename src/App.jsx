import { useRef, useState, useEffect } from "react";
import NavBar from "./components/navigation/NavBar";
import HeroSection from "./components/sections/HeroSection";
import companies from "./data/companies";
import Heading from "./components/text/Heading";
import Intro from "./components/text/Intro";
import Divider from "./components/ui/Divider";
import Button from "./components/buttons/Button";
import BackgroundCard from "./components/cards/BackgroundCard";
import Waveform from "./components/audio/Waveform";
import TextHighlight from "./components/text/TextHighlight";
import LayeredDonutChart from "./components/graphs/LayeredDonutChart";
import RadarChart from "./components/graphs/RadarChart";
import ChartDisplay from "./components/graphs/ChartDisplay";
import ActivationsGrid from "./components/graphs/ActivationsGrid";
import PianoChart from "./components/graphs/PianoChart";
import GaugeChart from "./components/graphs/GaugeChart";
import BinaryBarChart from "./components/graphs/BinaryBarChart";
import CustomGrid from "./components/ui/CustomGrid";
import { generateGradientColors } from "./utils/generateGradientColors";

const audioUrl = "https://webaudioapi.com/samples/audio-tag/chrono.mp3";

function App() {
  const heroRef = useRef(null);
  const [navDark, setNavDark] = useState(false);

  const baseColor = "#e84d4f";
  const genresData = [
    { label: "Hip Hop", value: 0.53 },
    { label: "Electronic", value: 0.4 },
    { label: "Soul", value: 0.16 },
    { label: "Pop", value: 0.14 },
  ];
  const colors = generateGradientColors(baseColor, genresData.length);
  const coloredGenresData = genresData.map((d, i) => ({
    ...d,
    color: colors[i],
  }));

  const moodData = [
    { label: "Aggressive", value: 0.97 },
    { label: "Excited", value: 0.9 },
    { label: "Happy", value: 0.43 },
    { label: "Sad", value: 0.15 },
    { label: "Zen", value: 0.02 },
  ];

  const arrangementData = [
    { label: "Vocal", value: 80 },
    { label: "Instrumental", value: 20 },
  ];

  const instruments = [
    { name: "accordion" },
    { name: "acousticbassguitar" },
    { name: "acousticguitar" },
    { name: "bass", activation: 80 },
    { name: "beat" },
    { name: "bell" },
    { name: "bongo" },
    { name: "brass" },
    { name: "cello" },
    { name: "clarinet" },
    { name: "classicalguitar" },
    { name: "computer", activation: 100 },
    { name: "doublebass" },
    { name: "drummachine" },
    { name: "drums", activation: 65 },
    { name: "electricguitar", activation: 70 },
    { name: "electricpiano" },
    { name: "flute" },
    { name: "guitar" },
    { name: "harmonica" },
    { name: "harp" },
    { name: "horn" },
    { name: "keyboard", activation: 20 },
    { name: "oboe" },
    { name: "orchestra" },
    { name: "organ" },
    { name: "pad" },
    { name: "percussion" },
    { name: "piano" },
    { name: "pipeorgan" },
    { name: "rhodes" },
    { name: "sampler" },
    { name: "saxophone" },
    { name: "strings" },
    { name: "synthesizer", activation: 100 },
    { name: "trombone" },
    { name: "trumpet" },
    { name: "viola" },
    { name: "violin" },
    { name: "voice", activation: 80 },
  ];

  const myLayout = [
    { i: "chartA", x: 0, y: 0, w: 6, h: 3 },
    { i: "chartB", x: 6, y: 0, w: 6, h: 3 },
    { i: "chartC", x: 0, y: 3, w: 4, h: 3 },
    { i: "chartD", x: 4, y: 3, w: 4, h: 2 },
    { i: "chartE", x: 8, y: 3, w: 4, h: 2 },
    { i: "chartF", x: 0, y: 6, w: 12, h: 4 },
  ];

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
    <div className="font-sans w-full min-h-screen overflow-x-hidden">
      <NavBar color={navDark ? "dark" : "default"} />
      <HeroSection ref={heroRef} companies={companies} />
      <div className="h-[3000px] bg-gradient-to-b from-offwhite via-coral to-blueblack w-full mx-auto">
        <div className="h-[300px]"></div>
        <div className="flex flex-col gap-4 w-5/8 h-full mx-auto">
          <div className="flex flex-col items-start justify-center gap-2 mt-32">
            <Intro color="coral" size="large" className="text-left">
              demo
            </Intro>
            <Heading align="left" size="medium" color="black">
              Explore our visualizations with{" "}
              <TextHighlight color="bluegradient">any song</TextHighlight>
            </Heading>
          </div>
          <Divider color="black" />
          <div className="flex flex-row items-end justify-between gap-4">
            <div className="flex flex-col items-start justify-start gap-2">
              <Heading align="left" size="small" color="white">
                Not Like Us
              </Heading>
              <Heading align="left" size="xsmall" color="white">
                Kendrick Lamar
              </Heading>
            </div>
            <div className="flex flex-row items-end justify-end gap-2">
              <Button type="tertiary" size="large">
                TRACK #1
              </Button>
              <Button type="tertiary" size="large">
                TRACK #2
              </Button>
              <Button type="tertiary" size="large">
                TRACK #3
              </Button>
            </div>
          </div>
          <BackgroundCard color="darkblue" padding="medium">
            <Waveform audioUrl={audioUrl} />
          </BackgroundCard>
          {/* <div className="flex flex-col justify-between items-center gap-6 mt-6 w-full">
            <div className="grid grid-cols-2 gap-6 items-stretch w-full">
              <ChartDisplay
                chartData={coloredGenresData}
                title="genres"
                Chart={LayeredDonutChart}
                fullWidth={true}
              />
              <ChartDisplay
                chartData={moodData}
                title="mood"
                Chart={RadarChart}
                fullWidth={true}
                showLegend={false}
              />
            </div>
            <div className="grid grid-cols-3 gap-6 items-stretch w-full">
              <BackgroundCard color="black" padding="medium" fullWidth={false}>
                <BinaryBarChart
                  data={arrangementData}
                  height={300}
                  width={150}
                />
              </BackgroundCard>
              <ChartDisplay
                chartData={[{ value: "C#", color: "#e84d4f" }]}
                title="key"
                Chart={PianoChart}
              />
              <ChartDisplay
                chartData={[{ value: 80, color: "#e84d4f" }]}
                title="danceability"
                Chart={GaugeChart}
                showLegend={false}
                topMargin="medium"
                width={300}
                height={50}
              />
            </div>
            <ChartDisplay
              chartData={instruments}
              title="instrumentation"
              align="center"
              Chart={ActivationsGrid}
              fullWidth={true}
              showLegend={false}
              topMargin="medium"
            />
          </div> */}
          <CustomGrid layout={myLayout} cols={12} rowHeight={120}>
            <ChartDisplay
              i="chartA"
              chartData={coloredGenresData}
              title="genres"
              Chart={LayeredDonutChart}
              fullWidth={true}
              showLegend={TextTrackCue}
            />
            <ChartDisplay
              i="chartB"
              chartData={moodData}
              title="mood"
              Chart={RadarChart}
              fullWidth={true}
            />
            <ChartDisplay
              i="chartC"
              chartData={arrangementData}
              Chart={BinaryBarChart}
              fullWidth={true}
              topMargin="large"
              title="instrumentation"
            />
            <ChartDisplay
              i="chartD"
              chartData={[{ value: 80, color: "#e84d4f" }]}
              title="danceability"
              fullWidth={true}
              Chart={GaugeChart}
              topMargin="medium"
              width={300}
              height={150}
            />
            <ChartDisplay
              i="chartE"
              fullWidth={true}
              chartData={[{ scale: "C#", key: "minor", color: "#e84d4f" }]}
              title="key"
              Chart={PianoChart}
            />
            <ChartDisplay
              i="chartF"
              chartData={instruments}
              title="instrumentation"
              align="center"
              Chart={ActivationsGrid}
              fullWidth={true}
              topMargin="small"
            />
          </CustomGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
