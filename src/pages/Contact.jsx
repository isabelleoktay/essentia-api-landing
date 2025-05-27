import NavBar from "../components/navigation/NavBar";
import Heading from "../components/text/Heading";
import TextHighlight from "../components/text/TextHighlight";
import BackgroundCard from "../components/cards/BackgroundCard";
import Text from "../components/text/Text";
import Footer from "../components/navigation/Footer";
import Input from "../components/forms/Input";
import Button from "../components/buttons/Button";

const Contact = () => {
  return (
    <div className="font-sans w-full min-h-screen bg-blueblack overflow-x-hidden">
      <NavBar color="dark" />
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 w-full">
        <div className="absolute inset-0 bg-[url(./assets/images/background.png)] bg-top bg-no-repeat bg-[length:100vw_auto] grayscale-50 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 w-full"></div>
        <div className="container mx-auto w-5/8 flex flex-col">
          <div className="flex flex-row items-center justify-center gap-2 z-20">
            <Heading size="large" weight="medium" align="left">
              Got a <TextHighlight>question?</TextHighlight>
            </Heading>
            <BackgroundCard
              fullWidth={false}
              color="bluegradient"
              padding="large"
              width="w-1/2"
              className="gap-6"
            >
              <div className="flex flex-row gap-6 w-full">
                <Input label="First name" />
                <Input label="Last name" />
              </div>
              <Input label="Email" type="email" />
              <Input label="Message" type="textarea" />
              <Text color="gray" size="xxsmall" align="left">
                EssentiaAPI is committed to protecting and respecting your
                privacy, and we’ll only use your personal information to
                administer your account and to provide the products and services
                you requested from us. From time to time, we would like to
                contact you about our products and services, as well as other
                content that may be of interest to you. If you consent to us
                contacting you for this purpose, please tick below to say how
                you would like us to contact you:
              </Text>
              <Input
                label="I agree to receive other communications from EssentiaAPI."
                labelColor="gray"
                type="checkbox"
              />
              <Text color="gray" size="xxsmall" align="left">
                You can unsubscribe from these communications at any time. For
                more information on how to unsubscribe, our privacy practices,
                and how we are committed to protecting and respecting your
                privacy, please review our privacy policy.
              </Text>
              <Button type="primary" size="medium">
                Submit
              </Button>
            </BackgroundCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
