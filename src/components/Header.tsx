import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import AddClass from "./AddClass";
import SaveSched from "./SaveSchedule";
import { DotsVerticalIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import ClearSchedule from "./ClearSchedule";
import Clipboard from "./Clipboard";

const Header = () => {
  const path = useRouter().pathname;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          type="button"
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-black bg-white border border-transparent shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none"
        >
          <SunIcon className="h-5" />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          type="button"
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-white border border-gray-300 shadow-sm bg-dark rounded-2xl hover:text-gray-200 focus:outline-none"
        >
          <MoonIcon className="h-5" />
        </button>
      );
    }
  };

  return (
    <>
      {path === "/" ? (
        <header className="sticky top-0 z-40 flex items-center justify-between flex-none px-6 py-4 bg-white border-b border-gray-200 shadow-sm dark:bg-darker h-14">
          <button
            type="button"
            className="text-xl font-semibold text-gray-600 dark:text-gray-200"
            onClick={() => {
              router.push("/");
            }}
          >
            Next
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Sched
            </span>
            <span className="ml-1 text-sm font-medium text-red-600 dark:text-red-400">
              Beta
            </span>
          </button>

          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center">
              <div className="relative space-x-4">
                <AddClass isButton={true} />
                <ClearSchedule isButton={true} />
                <SaveSched isButton={true} />
                {renderThemeChanger()}
              </div>

              {/* <div className="w-px h-6 mx-4 bg-gray-300" /> */}
            </div>
          </div>

          <div className="relative ml-6 md:hidden">
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="relative z-10 block p-2 text-gray-500 border border-transparent focus:outline-none"
            >
              <DotsVerticalIcon className="w-5 h-5" />
            </button>

            {showMenu && (
              <div className="absolute right-0 z-20 w-48 py-2 mt-1 bg-white rounded-md shadow-md dark:bg-dark">
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <AddClass isButton={false} />
                </div>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <ClearSchedule isButton={false} />
                </div>
                <hr className="border-gray-200 "></hr>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <SaveSched isButton={false} />
                </div>
              </div>
            )}
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-40 flex items-center justify-between flex-none px-6 py-4 bg-white border-b border-gray-200 shadow-sm dark:bg-darker h-14">
          <button
            type="button"
            className="text-xl font-semibold text-gray-600 dark:text-gray-200"
            onClick={() => {
              router.push("/");
            }}
          >
            Next
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Sched
            </span>
            <span className="ml-1 text-sm font-medium text-red-600 dark:text-red-400">
              Beta
            </span>
          </button>

          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center">
              <div className="relative space-x-4">
                <Clipboard />
                {renderThemeChanger()}
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
