const Text = ({
  color = "white",
  align = "center",
  size = "medium",
  font = "sans",
  children,
  className,
}) => {
  const colorClasses = {
    white: "text-offwhite",
    coral: "text-coral",
    blue: "text-brightblue",
    black: "text-blueblack",
    gray: "text-gray-400",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const sizeClasses = {
    xxsmall: "text-tiny md:text-xs lg:text-sm",
    xsmall: "text-xs md:text-sm lg:text-base",
    small: "text-sm md:text-base lg:text-lg",
    medium: "text-base md:text-lg lg:text-xl",
    large: "text-lg md:text-xl lg:text-2xl",
  };

  const fontClasses = {
    sans: "font-sans",
    mono: "font-mono",
  };

  const textClasses = `${colorClasses[color]} ${className} ${alignClasses[align]} ${sizeClasses[size]} ${fontClasses[font]}`;

  return <p className={textClasses}>{children}</p>;
};
export default Text;
