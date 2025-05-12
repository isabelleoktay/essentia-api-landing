const Text = ({ align = "center", children, className }) => {
  const baseClasses = `text-base md:text-lg lg:text-xl font-mono text-gray-300`;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const textClasses = `${baseClasses} ${className} ${alignClasses[align]}`;

  return <p className={textClasses}>{children}</p>;
};
export default Text;
