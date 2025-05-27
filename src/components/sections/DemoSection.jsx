import Button from "../buttons/Button";
import Intro from "../text/Intro";
import Heading from "../text/Heading";
import Divider from "../ui/Divider";
import BackgroundCard from "../cards/BackgroundCard";
import Waveform from "../audio/Waveform";
import ChartDisplay from "../visualizations/ChartDisplay";
import LayeredDonutChart from "../visualizations/LayeredDonutChart";
import RadarChart from "../visualizations/RadarChart";
import ActivationsGrid from "../visualizations/ActivationsGrid";
import PianoChart from "../visualizations/PianoChart";
import GaugeChart from "../visualizations/GaugeChart";
import BinaryBarChart from "../visualizations/BinaryBarChart";
import CustomGrid from "../ui/CustomGrid";
import BpmCircle from "../visualizations/BpmCircle";
import LineChart from "../visualizations/LineChart";
import TextHighlight from "../text/TextHighlight";

const audioUrl = "https://webaudioapi.com/samples/audio-tag/chrono.mp3";

const DemoSection = () => {
  const genresData = [
    { label: "Hip Hop", value: 0.53 },
    { label: "Electronic", value: 0.4 },
    { label: "Soul", value: 0.16 },
    { label: "Pop", value: 0.14 },
  ];
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

  const momentaryLoudness = [
    -23, -22, -20, -18, -19, -21, -22, -20, -18, -17, -19, -21, -23, -22, -20,
    -18, -19, -21, -22, -20, -18, -17, -19, -21, -23,
  ];

  const shortTermLoudness = [
    -22, -21, -19, -17, -18, -20, -21, -19, -17, -16, -18, -20, -22, -21, -19,
    -17, -18, -20, -21, -19, -17, -16, -18, -20, -22,
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
    { i: "chartC", x: 0, y: 3, w: 4, h: 4 },
    { i: "chartD", x: 4, y: 3, w: 4, h: 2 },
    { i: "chartE", x: 8, y: 3, w: 4, h: 2 },
    { i: "chartF", x: 4, y: 5, w: 3, h: 2 },
    { i: "chartG", x: 7, y: 5, w: 5, h: 2 },
    { i: "chartH", x: 0, y: 6, w: 12, h: 4 },
  ];

  return (
    <div className="bg-gradient-to-b from-offwhite via-coral to-blueblack w-full mx-auto">
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
        <CustomGrid layout={myLayout} cols={12} rowHeight={120}>
          <ChartDisplay
            i="chartA"
            chartData={genresData}
            baseColor="#e84d4f"
            title="genres"
            Chart={LayeredDonutChart}
            fullWidth={true}
            showLegend={true}
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
            fullWidth={true}
            title="BPM"
            align="center"
            chartData={[{ bpm: 120, color: "#e84d4f" }]}
            Chart={BpmCircle}
          />
          <ChartDisplay
            i="chartG"
            fullWidth={true}
            showLegend={true}
            title="Loudness"
            align="left"
            chartData={[
              {
                dataPoints: momentaryLoudness,
                color: "#320bff",
                label: "Momentary",
              },
              {
                dataPoints: shortTermLoudness,
                color: "#e84d4f",
                label: "Short Term",
              },
            ]}
            xLabels={Array.from(
              { length: momentaryLoudness.length },
              (_, i) => i + 1
            )}
            Chart={LineChart}
          />
          <ChartDisplay
            i="chartH"
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
  );
};

export default DemoSection;
