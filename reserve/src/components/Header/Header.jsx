import React, { useState, useEffect } from "react";
import ContactMeBtn from "../ContactMeBtn/ContactMeBtn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 bg-170550 h-16 w-full z-50 p-12 text-white flex justify-between items-center">
      <div className="flex justify-between items-center h-full">
        <div className="hidden md:flex items-center space-x-4">
          {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
          <a href="#home" className="text-white text-2xl hover:text-yellow-300">
            Home
          </a>
          <a
            href="#about"
            className="text-white text-2xl hover:text-yellow-300"
          >
            About Me
          </a>
          <a
            href="#services"
            className="text-white text-2xl hover:text-yellow-300"
          >
            Services
          </a>
          <a
            href="#skills"
            className="text-white text-2xl hover:text-yellow-300"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="text-white text-2xl hover:text-yellow-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white text-2xl hover:text-yellow-300"
          >
            Contact
          </a>
        </div>
        {/* menu adaptive btn */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white focus:outline-none z-50"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <ContactMeBtn />

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-170550 text-white text-center py-4">
          <button
            onClick={closeMenu}
            className="absolute top-2 right-4 text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <a href="#home" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="block hover:text-yellow-300">
            About Me
          </a>
          <a href="#services" className="block hover:text-yellow-300">
            Services
          </a>
          <a href="#skills" className="block hover:text-yellow-300">
            Skills
          </a>
          <a href="#portfolio" className="block hover:text-yellow-300">
            Portfolio
          </a>
          <a href="#contact" className="block hover:text-yellow-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
