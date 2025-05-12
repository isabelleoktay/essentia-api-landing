const IconButton = ({
  icon,
  onClick,
  size = "medium",
  color = "white",
  className,
}) => {
  const baseClasses = `rounded-lg p-2
    focus:outline-none transition font-mono`;

  const sizeClasses = {
    small: `text-xs`,
    medium: `text-base`,
    large: `text-lg`,
    xlarge: `text-xl`,
  };

  const colorClasses = {
    white: "text-offwhite hover:bg-gray-300/25 hover:text-offwhite",
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
