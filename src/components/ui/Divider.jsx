const Divider = ({ color = "black", className = "" }) => {
  const colorClasses = {
    black: "border-blueblack",
    white: "border-offwhite",
    coral: "border-coral",
    blue: "border-brightblue",
  };
  return (
    <hr
      className={`border-t ${colorClasses[color]} opacity-50 my-4 ${className}`}
    />
  );
};

export default Divider;
