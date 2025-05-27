const Divider = ({ color = "black", margin = "medium", className = "" }) => {
  const colorClasses = {
    black: "border-blueblack",
    white: "border-offwhite",
    coral: "border-coral",
    blue: "border-brightblue",
  };
  const marginClasses = {
    none: "my-0",
    small: "my-2",
    medium: "my-4",
    large: "my-6",
  };
  return (
    <hr
      className={`border-t ${colorClasses[color]} opacity-50 ${marginClasses[margin]} ${className}`}
    />
  );
};

export default Divider;
