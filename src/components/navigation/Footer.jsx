import Logo from "../text/Logo";
import Text from "../text/Text";
import Input from "../forms/Input";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import Divider from "../ui/Divider";
import NavColumn from "./NavColumn";

import { FaXTwitter, FaGithub } from "react-icons/fa6";

const productLinks = [
  { name: "Services" },
  { name: "Pricing" },
  { name: "Demo" },
  { name: "Docs" },
];

const generalLinks = [{ name: "Contact" }, { name: "About" }];

const Footer = () => {
  return (
    <footer className="bg-blueblack text-offwhite w-full py-16">
      <div className="container mx-auto w-5/8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col justify-start gap-10">
              <Logo color="coral" size="medium" className="text-left" />
              <div className="flex flex-col w-full gap-4">
                <Text color="offwhite" size="small" className="text-left">
                  Join our newsletter to stay up to date with the latest
                  features.
                </Text>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full max-w-lg"
                  onChange={() => {}}
                />
                <Button type="primary" size="medium" className="max-w-xs">
                  Submit
                </Button>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Text color="offwhite" size="xxsmall" className="text-left">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </Text>
                <div className="flex flex-row gap-2">
                  <IconButton
                    type="tertiary"
                    size="large"
                    icon={<FaGithub />}
                    onClick={() => {}}
                  />
                  <IconButton
                    type="tertiary"
                    size="large"
                    icon={<FaXTwitter />}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <NavColumn title="Product" items={productLinks} />
              <NavColumn title="General" items={generalLinks} />
            </div>
          </div>
        </div>
        <Divider color="offwhite" margin="large" />
        <div className="flex flex-row w-full justify-between">
          <Text color="offwhite" size="xxsmall" font="mono">
            © 2025 EssentiaAPI. All rights reserved.
          </Text>
          <div className="flex flex-row items-center justify-center gap-10">
            <Text color="offwhite" size="xsmall">
              Terms of Service
            </Text>
            <Text color="offwhite" size="xsmall">
              Privacy Policy
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
