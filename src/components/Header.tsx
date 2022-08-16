// import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">Scheduler</h2>
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-12">
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        {/* Button */}
        <button
          onClick={toggleTheme}
          className="p-2 text-white bg-brightRed rounded-full baseline"
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6 " />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
