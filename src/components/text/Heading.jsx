const Heading = ({
  align = "center",
  size = "medium",
  color = "white",
  children,
  className,
}) => {
  const baseClasses = `font-extrabold font-sans tracking-widest`;
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
  const headerClasses = `${baseClasses} ${className} ${alignClasses[align]} ${sizeClasses[size]} ${colorClasses[color]}`;

  return <h1 className={headerClasses}>{children}</h1>;
};
export default Heading;
