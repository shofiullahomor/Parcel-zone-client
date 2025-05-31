import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { IoIosArrowUp, IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  // Toggle dark/light mode
  //   const toggleTheme = () => {
  //     const [darkMode, setDarkMode] = useState(
  //       () => localStorage.getItem("theme") === "light"
  //     );
  //     const newTheme = darkMode ? "dark" : "light";
  //     setDarkMode(!darkMode);
  //     localStorage.setItem("theme", newTheme);
  //     document.documentElement.classList.toggle("dark", !darkMode);
  //   };
  //   // Apply theme on page load
  //   useEffect(() => {
  //     if (darkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [darkMode]);
  return (
    <nav className="px-5 md:px-10 py-2 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A0D17] shadow-md transition-all duration-300">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-[60px]" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-[20px] text-[1rem] text-[#424242] dark:text-gray-200">
        <NavLink
          to="/about"
          className="hover:text-gray-600 dark:hover:text-gray-400"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-gray-600 dark:hover:text-gray-400"
        >
          Contact
        </NavLink>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-[15px]">
        {/* Theme Toggle Button */}
        <button className="text-xl text-gray-600 dark:text-gray-200">
          <BsMoon /> : <BsSun />
        </button>

        {/* Notifications Icon */}
        <button className="text-gray-600 dark:text-gray-200">
          <IoMdNotificationsOutline className="w-7 h-7" />
        </button>

        {/* User Menu */}

        <div className="flex items-center gap-[10px] cursor-pointer relative">
          {/* User Avatar */}
          <div className="relative">
            <img
              src="../../public/logo.png"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white dark:border-[#0A0D17]"></div>
          </div>

          {/* Dropdown Menu */}
          <div>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              <FiUser />
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <MdOutlineDashboard />
              Dashboard
            </p>

            <div className="mt-3 border-t border-gray-200 dark:border-gray-600 pt-[5px]">
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50 dark:hover:bg-red-700">
                <TbLogout2 />
                <button>Logout</button>
              </p>
            </div>
          </div>

          <IoIosArrowUp />
        </div>

        <Link
          to="/login"
          className="text-sm py-1.5 px-3 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-500 flex items-center gap-2"
        >
          <CiLogin />
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
