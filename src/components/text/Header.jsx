const Header = ({ align = "center", children, className }) => {
  const baseClasses = `text-3xl md:text-4xl lg:text-8xl font-extrabold text-offwhite font-sans tracking-widest m-8`;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const headerClasses = `${baseClasses} ${className} ${alignClasses[align]}`;

  return <h1 className={headerClasses}>{children}</h1>;
};
export default Header;
