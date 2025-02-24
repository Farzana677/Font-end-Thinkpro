import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import logo from "../assets/logo2.svg";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { path: "/", label: "Homeee" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/career", label: "Career" },
];
export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const mobileMenuClass = isOpen ? "block" : "hidden";

  const buttonStyles =
    "px-4 py-2 rounded-sm text-xl font text-[#64AF37] bg-white border-1 border-solid border-[#64AF37]";
  const navItemStyles = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md ${isActive ? "text-[#64AF37]" : "text-[#0A2333]"}`;
  return (
    <nav className="bg-white">
      <section className="relative flex items-center justify-between py-1 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="outlineNone relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-400 focus:outline-hidden focus:ring-inset"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {!isOpen ? (
              <Menu color="green" className="h-10 w-10 outlineNone" />
            ) : (
              <X color="red" />
            )}
          </button>
        </div>
        {/* Logo and main nav */}
        <div className="flex w-full items-center justify-between sm:items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-24 object-contain cursor-pointer"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 md:flex  space-x-4 text-xl font-semibold">
            {navigationItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navItemStyles}>
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => navigate("/book-consultation")}
              className={buttonStyles}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
      {/* Mobile Menu */}
      <section className={`${mobileMenuClass} md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 text-base font-medium text-gray-900"
                  : "block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/book-consultation"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-base font-medium mt-2"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </nav>
  );
}
