const BackgroundCard = ({
  children,
  color = "black",
  fullWidth = true,
  padding = "small",
  className = "",
  i,
}) => {
  const colorClasses = {
    black: "bg-blueblack/50",
    white: "bg-offwhite/50",
    blue: "bg-darkblue/50",
    darkblue: "bg-darkblue/50",
    translucent:
      "bg-linear-to-r from-coral/25 to-brightblue/25 backdrop-blur-md",
  };

  const paddingClasses = {
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  const fullWidthClass = fullWidth ? "w-full" : "w-fit";

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
