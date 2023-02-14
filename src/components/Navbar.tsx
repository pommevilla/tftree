import React from "react";

const Navbar = () => {
  return (
    // <nav className="rounded border-gray-200  p-3 dark:border-yellow-50 dark:bg-indigo-900">
    <nav className="rounded border-gray-200  bg-gradient-to-r from-indigo-500 to-amber-500 p-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/imgs/Teamfight_Tactics_logo.svg"
            className="mr-3 h-6 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TFTree: Team builder and explorer
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
