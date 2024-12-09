import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex h-16 px-16 sticky top-0 justify-between items-center bg-slate-950">
      <h1>
        <NavLink to="" className="text-2xl font-bold text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out">
          Akedil Aidyn
        </NavLink>
      </h1>
      <nav>
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
    </header>
  );
};

export default Navbar;
