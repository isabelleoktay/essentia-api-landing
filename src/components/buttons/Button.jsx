const Button = ({
  type = "primary",
  size = "medium",
  disabled = false,
  width = "full",
  children,
  className,
}) => {
  const baseClasses = `rounded-lg px-4 py-2
    focus:outline-none transition font-mono`;

  const typeClasses = {
    primary: `bg-coral text-offwhite hover:bg-linear-to-b hover:from-coral hover:to-brightblue cursor-pointer`,
    secondary: `bg-gray-300/25 text-offwhite hover:bg-gray-300/50 cursor-pointer`,
    tertiary:
      "bg-brightblue/25 text-offwhite hover:bg-brightblue/75 cursor-pointer",
    disabled: `bg-gray-300 text-gray-700 cursor-not-allowed`,
  };
  const sizeClasses = {
    small: `text-xs py-1 px-2`,
    medium: `text-base py-2 px-4`,
    large: `text-lg py-3 px-6`,
    xlarge: `text-3xl py-6 px-12`,
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${
    disabled ? typeClasses.disabled : typeClasses[type]
  }`;

  return (
    <button className={`${buttonClasses} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
