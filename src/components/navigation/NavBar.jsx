import Button from "../buttons/Button";

const NavBar = ({ color = "default" }) => {
  const colorClasses = {
    default: "bg-transparent",
    dark: "bg-blueblack",
  };

  return (
    <nav className={`fixed ${colorClasses[color]} font-sans w-full h-auto m-0`}>
      <div className="py-4 px-8 flex items-center justify-between font-mono">
        {/* Logo */}
        <div className="flex items-center gap-1 text-gray-200 text-lg font-semibold">
          <span className="text-red-500 text-2xl">E</span>
          <span className="tracking-wide">SSENTIA</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {["Home", "Services", "Pricing", "Demo", "Docs"].map((label) => (
            <li
              key={label}
              className="relative group text-offwhite cursor-pointer"
            >
              {label}
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-offwhite transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="secondary" size="small">
            Log In
          </Button>
          <Button type="primary" size="small">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
