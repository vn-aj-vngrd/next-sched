import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { ButtonProps } from "../types";
import ReactTooltip from "react-tooltip";

const ToogleTheme = ({ isButton }: ButtonProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [tooltip, showTooltip] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        {tooltip && <ReactTooltip id="light" effect="float" place="bottom" />}

        {isButton ? (
          <button
            data-for="light"
            data-tip="Light Mode"
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
            onClick={() => setTheme("light")}
            type="button"
            className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-black bg-white border border-transparent shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none"
          >
            <SunIcon className="h-5" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("light")}
            className="w-full justify-start flex px-4 py-2 text-sm text-dark dark:text-white"
          >
            Light Mode
          </button>
        )}
      </>
    );
  } else {
    return (
      <>
        {tooltip && <ReactTooltip id="dark" effect="float" place="bottom" />}

        {isButton ? (
          <button
            data-for="dark"
            data-tip="Dark Mode"
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
            onClick={() => setTheme("dark")}
            type="button"
            className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-white border border-gray-300 shadow-sm bg-dark rounded-2xl hover:text-gray-200 focus:outline-none"
          >
            <MoonIcon className="h-5" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="w-full justify-start flex px-4 py-2 text-sm text-dark dark:text-white"
          >
            Dark Mode
          </button>
        )}
      </>
    );
  }
};

export default ToogleTheme;
