import LayeredDonutChart from "../components/visualizations/LayeredDonutChart";
import RadarChart from "../components/visualizations/RadarChart";

const moodData = [
  { label: "Aggressive", value: 0.97 },
  { label: "Excited", value: 0.9 },
  { label: "Happy", value: 0.43 },
  { label: "Sad", value: 0.24 },
  { label: "Zen", value: 0.75 },
];

const genresData = [
  { label: "Hip Hop", value: 0.53 },
  { label: "Electronic", value: 0.4 },
  { label: "Soul", value: 0.16 },
  { label: "Pop", value: 0.14 },
];

const servicesPageServices = [
  {
    title: "Data Insights",
    subtitle: "For Your Music Collection",
    description:
      "We offer custom data insights based on our audio analysis to help you better understand your music collection.",
    buttonText: "Contact us",
    onButtonClick: () => {},
    chartComponent: (
      <RadarChart data={moodData} chartColor="black" showLabels={false} />
    ),
    reverse: false,
  },
  {
    title: "Custom Services",
    subtitle: "Tailored Analysis Solutions",
    description:
      "Do you have unique audio analysis requirements or specific technical needs? Contact us to find the best solution that perfectly fits your use case.",
    buttonText: "Request a quote",
    onButtonClick: () => {},
    chartComponent: <LayeredDonutChart data={genresData} baseColor="#e53845" />,
    reverse: true,
  },
];

const homePageServices = [
  {
    intro: "metadata",
    title: "Analyze",
    subtitle: "Anything",
    description:
      "Bring scalable, intelligent audio analysis to your entire music library.",
    chartComponent: (
      <RadarChart data={moodData} chartColor="black" showLabels={false} />
    ),
    reverse: false,
  },
  {
    intro: "solutions",
    title: "Build",
    subtitle: "Anything",
    description:
      "Bring scalable, intelligent audio analysis to your entire music library.",
    chartComponent: <LayeredDonutChart data={genresData} baseColor="#e53845" />,
    reverse: true,
  },
];

export { servicesPageServices, homePageServices };
