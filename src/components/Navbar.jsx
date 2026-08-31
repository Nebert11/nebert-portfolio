import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" }, { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <a className="wordmark" href="/" aria-label="Nebert Kuria home"><span>nebert</span></a>

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
                href={`/${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="/contact">Let's talk <ArrowUpRight size={15} /></a>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`/${item.id}`}
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
