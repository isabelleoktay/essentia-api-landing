import Button from "./components/buttons/Button";
import Waveform from "./components/audio/Waveform";
import BackgroundCard from "./components/cards/BackgroundCard";
import NavBar from "./components/navigation/NavBar";
import Header from "./components/text/Header";
import Text from "./components/text/Text";

const audioUrl = "https://webaudioapi.com/samples/audio-tag/chrono.mp3";

function App() {
  return (
    <div className="font-sans w-full min-h-screen bg-[url(./assets/images/background.png)] bg-top bg-no-repeat bg-[length:100vw_auto] overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col items-center justify-center pt-16 w-full">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            <Header>Analyze your entire library.</Header>
            <Text className="w-3/4">
              Built by the Music Technology Group, our AI tools bring scalable,
              intelligent audio analysis to your entire music library.
            </Text>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button type="primary" size="large">
              Start for free
            </Button>
            <Button type="secondary" size="large">
              Try the extended demo
            </Button>
          </div>
          <div></div>
        </div>
        {/* <h1 className="text-offwhite text-2xl mb-4 tracking-widest">
          TESTING COMPONENTS
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 w-1/2">
          <div className="flex flex-row items-center justify-center gap-4">
            <Button type="primary" size="medium">
              Start for free
            </Button>
            <Button type="secondary" size="medium">
              Try the extended demo
            </Button>
            <Button type="tertiary" size="medium">
              TRACK #1
            </Button>
          </div>
          <BackgroundCard color="black">
            <Waveform audioUrl={audioUrl} />
          </BackgroundCard>
        </div> */}
      </div>
    </div>
  );
}

export default App;
