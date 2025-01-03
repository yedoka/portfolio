import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-slate-950 z-50">
      <div className="flex h-16 px-4 md:px-16 justify-between items-center">
        {/* Logo */}
        <h1>
          <NavLink
            to=""
            className="text-lg font-bold text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out"
          >
            Akedil
          </NavLink>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 hover:text-teal-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-slate-200">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col px-4 py-2 text-slate-200">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `block py-2 font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `block py-2 font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  `block py-2 font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `block py-2 font-semibold ${
                    isActive ? "underline underline-offset-8 text-teal-300" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
