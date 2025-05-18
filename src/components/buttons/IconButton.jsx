const IconButton = ({
  icon,
  onClick,
  size = "medium",
  color = "white",
  className,
}) => {
  const baseClasses = `rounded-lg p-2
    focus:outline-none transition font-mono hover:bg-gray-300/25`;

  const sizeClasses = {
    small: `text-sm`,
    medium: `text-lg`,
    large: `text-2xl`,
    xlarge: `text-4xl`,
  };

  const colorClasses = {
    white: "text-offwhite",
    darkblue: "text-darkblue",
  };

  return (
    <button
      className={`${baseClasses} ${colorClasses[color]} ${className} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default IconButton;
