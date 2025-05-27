import Text from "../text/Text";
const NavColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Text
        align="left"
        color="offwhite"
        size="small"
        className="uppercase font-bold mb-2"
      >
        {title}
      </Text>
      {items.map((item) => (
        <Text
          key={item.name}
          color="gray"
          size="xsmall"
          className="text-left cursor-pointer hover:text-offwhite transition-colors duration-200"
        >
          {item.name}
        </Text>
      ))}
    </div>
  );
};

export default NavColumn;
