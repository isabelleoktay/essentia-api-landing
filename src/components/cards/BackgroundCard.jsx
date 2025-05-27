const BackgroundCard = ({
  children,
  color = "black",
  fullWidth = true,
  width = "w-fit",
  padding = "small",
  className = "",
  i,
}) => {
  const colorClasses = {
    black: "bg-blueblack/50",
    blackopaque: "bg-blueblack",
    white: "bg-offwhite/25",
    blue: "bg-darkblue/50",
    darkblue: "bg-darkblue/50",
    translucent:
      "bg-linear-to-r from-coral/25 to-brightblue/25 backdrop-blur-md",
    bluegradient:
      "bg-linear-to-b from-blueblack via-blueblack to-brightblue/50 backdrop-blur-md",
  };

  const paddingClasses = {
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  const fullWidthClass = fullWidth ? "w-full" : width;

  return (
    <div
      i={i}
      className={`rounded-xl flex flex-col ${paddingClasses[padding]} ${colorClasses[color]} ${fullWidthClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundCard;
