const Intro = ({ children, color = "black", size = "small", className }) => {
  const colorClasses = {
    white: "text-offwhite",
    black: "bg-blueblack",
    coral: "text-coral",
    blue: "text-brightblue",
  };
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  const baseClasses = `font-mono font-bold uppercase tracking-widest`;

  return (
    <div
      className={`${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};
export default Intro;
