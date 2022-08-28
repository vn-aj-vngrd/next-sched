import { useState } from "react";
import AddClass from "./AddClass";
import SaveSched from "./SaveSchedule";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import ClearSchedule from "./ClearSchedule";
import Clipboard from "./Clipboard";
import ToggleTheme from "./ToggleTheme";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header = () => {
  const path = useRouter().pathname;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const title = useSelector(
    (state: RootState) => state.titleReducer.titleState
  );

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between flex-none px-6 py-4 bg-white border-b border-gray-200 shadow-sm dark:bg-darkest dark:border-divideColor h-14">
      <button
        type="button"
        className="text-xl text-dark dark:text-light"
        onClick={() => {
          router.push("/");
        }}
      >
        Next
        <b className="font-bold text-blue-500">Sched</b>
        <span className="ml-1 text-xs font-medium text-red-500">Beta</span>
      </button>

      {path === "/schedule/[id]" && (
        <>
          <div className="hidden font-medium text-dark md:flex dark:text-white">
            {title}
          </div>
        </>
      )}
      <div className="flex items-center">
        <div className="hidden md:flex md:items-center space-x-5">
          {path === "/" && (
            <>
              <div>
                <AddClass isButton={true} />
              </div>

              <div>
                <ClearSchedule isButton={true} />
              </div>

              <div>
                <SaveSched isButton={true} />
              </div>
            </>
          )}

          {path === "/schedule/[id]" && (
            <>
              <div>
                <Clipboard isButton={true} />
              </div>
            </>
          )}

          <div>{<ToggleTheme isButton={true} />}</div>
        </div>
      </div>

      <div className="flex items-center md:hidden">
        {path === "/schedule/[id]" && (
          <>
            <div className="font-medium text-dark dark:text-white">
              {title.substring(0, 12)}
              {title.length > 12 && "..."}
            </div>
          </>
        )}
        <div className="relative ml-2 ">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="relative z-10 block p-2 text-gray-500 border border-transparent focus:outline-none dark:text-white"
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

              <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-darker">
                <ToggleTheme />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
