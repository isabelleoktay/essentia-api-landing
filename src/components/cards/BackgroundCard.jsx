const BackgroundCard = ({ children, color = "black", className = "" }) => {
  const colorClasses = {
    black: "bg-blueblack/50",
    white: "bg-offwhite/50",
    blue: "bg-darkblue/50",
  };

  return (
    <div
      className={`rounded-3xl p-2 md:p-4 ${colorClasses[color]} w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundCard;
