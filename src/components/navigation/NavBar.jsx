import { Link, useLocation } from "react-router-dom";
import Button from "../buttons/Button";
import Logo from "../text/Logo";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Demo", path: "/demo" },
  { name: "Docs", path: "/docs" },
];

const NavBar = ({ color = "default" }) => {
  const location = useLocation();

  const colorClasses = {
    default: "bg-transparent",
    dark: "bg-blueblack",
  };

  return (
    <nav
      className={`fixed ${colorClasses[color]} font-sans w-full h-auto m-0 transition-colors duration-200 z-50`}
    >
      <div className="py-4 px-8 flex items-center justify-between font-mono">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li
              key={link.name}
              className="relative group text-offwhite cursor-pointer"
            >
              <Link to={link.path}>{link.name}</Link>
              <span
                className={`absolute bottom-0 h-[1px] bg-offwhite transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
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
