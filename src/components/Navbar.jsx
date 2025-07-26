import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // You can also use Heroicons or any icon lib

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "contact"];
    const scrollY = window.scrollY + 200;

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
        setActiveSection(id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full text-white shadow-md z-50 bg-[#01574e]">
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
        <h1 className="text-lg font-bold">nebert</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 mr-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-blue-400 transition ${
                  activeSection === item.id ? "text-blue-300 font-semibold" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-[#01574e] transition-all duration-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-blue-400 transition ${
                  activeSection === item.id ? "text-blue-300 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
