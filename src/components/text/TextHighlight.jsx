const TextHighlight = ({ color = "multigradient", children, className }) => {
  const baseClasses = `inline-block text-transparent pb-3 bg-clip-text`;
  const colorClasses = {
    bluegradient: "bg-gradient-to-r from-brightblue to-blueblack",
    multigradient: "bg-gradient-to-r from-coral to-brightblue",
  };
  const textClasses = `${baseClasses} ${colorClasses[color]} ${className}`;

  return <span className={textClasses}>{children}</span>;
};
export default TextHighlight;
