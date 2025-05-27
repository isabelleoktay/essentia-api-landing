const Heading = ({
  align = "center",
  size = "medium",
  color = "white",
  weight = "bold",
  children,
  className,
}) => {
  const baseClasses = `font-sans tracking-widest`;

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-semibold",
    bold: "font-extrabold",
  };
  const colorClasses = {
    white: "text-offwhite",
    black: "text-blueblack",
    coral: "text-coral",
    blue: "text-brightblue",
  };
  const sizeClasses = {
    xsmall: "text-2xl",
    small: "text-4xl",
    medium: "text-6xl",
    large: "text-8xl",
  };
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const headerClasses = `${baseClasses} ${weightClasses[weight]} ${className} ${alignClasses[align]} ${sizeClasses[size]} ${colorClasses[color]}`;

  return <h1 className={headerClasses}>{children}</h1>;
};
export default Heading;
