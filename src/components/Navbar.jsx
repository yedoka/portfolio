import React, { useState } from "react";
import logo from "../assets/logo-white.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDarkModeChange = () => {
    toggleDarkMode();
  };

  return (
    <header id="navbar">
      <nav className="flex items-center justify-between px-10 py-4 md:flex-row md:items-center md:justify-around md:px-0 dark:bg-neutral-900 dark:text-white">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-lg hover:cursor-pointer "
        />

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <AiOutlineClose className="w-8 h-8" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8" />
          )}
        </button>

        <ul
          className={`flex-col space-y-4 md:flex md:flex-row  md:space-y-0 md:space-x-4 ${
            isOpen
              ? "block absolute top-20 right-10 border-2 rounded-lg p-3"
              : "hidden"
          }`}
        >
          <li>
            <a
              className="font-bold hover:text-dark-blue hover:ease-in duration-200 dark:hover:bg-neutral-800 p-2 rounded-lg"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-dark-blue hover:ease-in duration-200 dark:hover:bg-neutral-800 p-2 rounded-lg"
              href="https://github.com/yedoka"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-dark-blue hover:ease-in duration-200 dark:hover:bg-neutral-800 p-2 rounded-lg"
              href="/cv.pdf"
              download="Akedil_Aidyn_CV"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="font-bold hover:text-dark-blue hover:ease-in duration-200 dark:hover:bg-neutral-800 p-2 rounded-lg"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <button onClick={handleDarkModeChange}>
              {darkMode ? (
                <MdOutlineLightMode className="w-6 h-6 text-yellow-300" />
              ) : (
                <MdOutlineDarkMode className="w-6 h-6 text-dark-blue" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
