import Heading from "../text/Heading";
import Text from "../text/Text";

const MetadataCard = ({ Icon, heading, subheading, className }) => {
  return (
    <div
      className={`
        flex flex-col aspect-square items-center px-4 py-8 justify-start gap-6
        bg-linear-to-b from-lightcoral/25 to-brightblue/25 
        rounded-4xl 
        ${className}
        `}
    >
      <Icon size={64} />
      <div className="flex flex-col w-full items-center gap-2">
        <Heading
          size="xsmall"
          color="black"
          weight="medium"
          align="center"
          className="capitalize"
        >
          {heading}
        </Heading>
        <Text size="xsmall" color="black" align="center" font="mono">
          {subheading}
        </Text>
      </div>
    </div>
  );
};

export default MetadataCard;
