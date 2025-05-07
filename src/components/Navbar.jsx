import { Link, NavLink } from "react-router-dom";
import useCheckAuth from "../hooks/checkAuth";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  useCheckAuth();

  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <nav className=" border-gray-200 bg-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            STORE
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {LINKS.map((l) => {
                return (
                  <li key={l.path}>
                    <NavLink
                      to={l.path}
                      className={({ isActive }) =>
                        `
                        block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent  md:p-0 ${
                          isActive
                            ? "text-teal-500"
                            : "text-black  dark:text-white"
                        }`
                      }
                      aria-current="page"
                    >
                      {l.name}
                    </NavLink>
                  </li>
                );
              })}
              <ChekLoggedInUser />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const ChekLoggedInUser = () => {
  const { loggedIn } = useCheckAuth();
  console.log(loggedIn, "---");
  return (
    <li>
      <Link
        to={loggedIn ? "/profile" : "/login"}
        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {loggedIn ? "profile" : "Login"}
      </Link>
    </li>
  );
};
