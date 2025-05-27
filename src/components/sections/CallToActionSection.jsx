import Heading from "../text/Heading";
import TextHighlight from "../text/TextHighlight";
import Button from "../buttons/Button";

const CallToActionSection = () => {
  return (
    <section className="bg-[url(./assets/images/background.png)] bg-cover bg-center bg-no-repeat w-full text-white py-20">
      <div className="container mx-auto w-5/8">
        <div className="flex flex-row items-center justify-between">
          <Heading size="large" align="left" className="w-3/4">
            Start analyzing{" "}
            <TextHighlight color="multigradient">audio now</TextHighlight>
          </Heading>
          <div className="flex flex-col gap-4">
            <Button type="primary" size="xlarge">
              Start now
            </Button>
            <Button type="secondary" size="xlarge">
              API docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionSection;
