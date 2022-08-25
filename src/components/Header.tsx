import { useState } from "react";
import AddClass from "./AddClass";
import SaveSched from "./SaveSchedule";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import ClearSchedule from "./ClearSchedule";
import Clipboard from "./Clipboard";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const path = useRouter().pathname;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between flex-none px-6 py-4 bg-white border-b border-gray-200 shadow-sm dark:bg-darkest dark:border-divideColor h-14">
      <button
        type="button"
        className="text-xl text-dark dark:text-light"
        onClick={() => {
          router.push("/");
        }}
      >
        Next
        <b className="font-bold text-darkest dark:text-white">Sched</b>
        <span className="ml-1 text-xs font-medium text-red-500">Beta</span>
      </button>

      <div className="flex items-center">
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="relative space-x-4">
            {path === "/" && (
              <>
                <AddClass isButton={true} />
                <ClearSchedule isButton={true} />
                <SaveSched isButton={true} />
              </>
            )}

            {path === "/schedule/[id]" && (
              <>
                <Clipboard isButton={true} />
              </>
            )}

            {<ToggleTheme isButton={true} />}
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
            {path === "/" && (
              <>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <AddClass />
                </div>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <ClearSchedule />
                </div>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                  <SaveSched />
                </div>
              </>
            )}

            {path === "/schedule/[id]" && (
              <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                <Clipboard />
              </div>
            )}

            <hr className="border-gray-200 "></hr>
            <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
              <ToggleTheme />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
