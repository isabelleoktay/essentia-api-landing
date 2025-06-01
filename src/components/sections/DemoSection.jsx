import Button from "../buttons/Button";
import Intro from "../text/Intro";
import Heading from "../text/Heading";
import Divider from "../ui/Divider";
import BackgroundCard from "../cards/BackgroundCard";
import Waveform from "../audio/Waveform";
import ChartDisplay from "../visualizations/ChartDisplay";
import RadarChart from "../visualizations/RadarChart";
import ActivationsGrid from "../visualizations/ActivationsGrid";
import PianoChart from "../visualizations/PianoChart";
import GaugeChart from "../visualizations/GaugeChart";
import BinaryBarChart from "../visualizations/BinaryBarChart";
import CustomGrid from "../ui/CustomGrid";
import BpmCircle from "../visualizations/BpmCircle";
import LineChart from "../visualizations/LineChart";
import TextHighlight from "../text/TextHighlight";
import GenreActivationVisualizer from "../visualizations/GenreActivationVisualizer";
import { useJsonl } from "../../utils/useJsonl";
import { parseData, parseGenreActivations } from "../../utils/parseData";
import { formatLoudness } from "../../utils/formatLoudness";

const audioUrl = "https://webaudioapi.com/samples/audio-tag/chrono.mp3";

const DemoSection = () => {
  const data = useJsonl("/data/output.jsonl");
  const loudness = formatLoudness(parseData(data.loudness_ebur128));

  const myLayout = [
    { i: "chartA", x: 0, y: 0, w: 6, h: 4 },
    { i: "chartB", x: 6, y: 0, w: 6, h: 4 },
    { i: "chartC", x: 0, y: 4, w: 4, h: 4 },
    { i: "chartD", x: 4, y: 4, w: 4, h: 2 },
    { i: "chartE", x: 8, y: 4, w: 4, h: 2 },
    { i: "chartF", x: 4, y: 6, w: 3, h: 2 },
    { i: "chartG", x: 7, y: 6, w: 5, h: 2 },
    { i: "chartH", x: 0, y: 7, w: 12, h: 4 },
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
        <CustomGrid
          layout={myLayout}
          cols={12}
          rowHeight={150}
          isDraggable={false}
        >
          <ChartDisplay
            i="chartA"
            chartData={parseGenreActivations(data.genre_discogs400)}
            title="genres"
            Chart={GenreActivationVisualizer}
            fullWidth={true}
          />
          <ChartDisplay
            i="chartB"
            chartData={parseData(data.mood)}
            title="mood"
            Chart={RadarChart}
            fullWidth={true}
            width={400}
            height={400}
          />
          <ChartDisplay
            i="chartC"
            chartData={parseData(data.voice_instrumental)}
            Chart={BinaryBarChart}
            fullWidth={true}
            topMargin="large"
            title="instrumentation"
          />
          <ChartDisplay
            i="chartD"
            chartData={parseData(data.danceability)}
            title="danceability"
            fullWidth={true}
            Chart={GaugeChart}
            topMargin="medium"
          />
          <ChartDisplay
            i="chartE"
            fullWidth={true}
            chartData={parseData(data.key)}
            title="key"
            Chart={PianoChart}
          />
          <ChartDisplay
            i="chartF"
            fullWidth={true}
            title="BPM"
            align="center"
            chartData={parseData(data.bpm_degara)}
            Chart={BpmCircle}
          />
          <ChartDisplay
            i="chartG"
            fullWidth={true}
            showLegend={true}
            title="Loudness"
            align="left"
            chartData={loudness.data}
            xLabels={loudness.xLabels}
            Chart={LineChart}
          />
          <ChartDisplay
            i="chartH"
            chartData={parseData(data.instrument_mtgjamendo)}
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
