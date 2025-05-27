const Logo = ({ color = "coral", size = "small", className }) => {
  const baseClasses = "flex items-center justify-center";
  const colorClasses = {
    coral: "text-coral",
    brightblue: "text-brightblue",
  };
  const sizeClasses = {
    small: "text-lg",
    medium: "text-3xl",
    large: "text-6xl",
  };

  const eSizeClasses = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-7xl",
  };

  return (
    <div
      className={`flex items-center gap-1 text-offwhite ${sizeClasses[size]} font-semibold ${className} font-mono`}
    >
      <span className={`${colorClasses[color]} ${eSizeClasses[size]}`}>E</span>
      <span className="tracking-wide">SSENTIA</span>
    </div>
  );
};
export default Logo;
