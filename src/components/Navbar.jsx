import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "portfolio", "contact"];
    const scrollY = window.scrollY + 160;

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
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "portfolio", label: "Toolkit" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <a className="wordmark" href="#home" aria-label="Nebert Kuria home"><span>n</span>ebert.</a>

        {/* Hamburger Icon */}
        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => setIsOpen(false)}
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
