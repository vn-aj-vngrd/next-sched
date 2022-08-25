import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { ButtonProps } from "../types";

const ToogleTheme = ({ isButton }: ButtonProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        {isButton ? (
          <button
            onClick={() => setTheme("light")}
            type="button"
            className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-black bg-white border border-transparent shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none"
          >
            <SunIcon className="h-5" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("light")}
            className="block px-4 py-2 text-sm"
          >
            Light Mode
          </button>
        )}
      </>
    );
  } else {
    return (
      <>
        {isButton ? (
          <button
            onClick={() => setTheme("dark")}
            type="button"
            className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-white border border-gray-300 shadow-sm bg-dark rounded-2xl hover:text-gray-200 focus:outline-none"
          >
            <MoonIcon className="h-5" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="block px-4 py-2 text-sm text-dark"
          >
            Dark Mode
          </button>
        )}
      </>
    );
  }
};

export default ToogleTheme;
