import AddClass from "./AddClass";
import SaveSched from "./SaveSchedule";
import { Fragment, useState } from "react";
import { DotsHorizontalIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import router, { useRouter } from "next/router";
import ClearSchedule from "./ClearSchedule";

const Header = () => {
  const path = useRouter().pathname;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      {path === "/" ? (
        <header className="sticky top-0 z-40 flex items-center justify-between flex-none px-6 py-4 bg-white shadow-sm">
          <button
            type="button"
            className="text-xl font-bold text-gray-600"
            onClick={() => {
              router.push("/");
            }}
          >
            Next<span className="text-blue-600">Sched</span>
            <span className="ml-1 text-sm font-medium text-red-600">Beta</span>
          </button>

          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center">
              <Menu as="div" className="relative space-x-4">
                <AddClass isButton={true} />
                <ClearSchedule isButton={true} />
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                ></Transition>
              </Menu>

              <div className="w-px h-6 mx-4 bg-gray-300" />

              <SaveSched isButton={true} />
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
              <div className="absolute right-0 z-20 w-48 py-2 mt-1 bg-white rounded-md shadow-md">
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 ">
                  <AddClass isButton={false} />
                </div>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 ">
                  <ClearSchedule isButton={false} />
                </div>
                <hr className="border-gray-200 "></hr>
                <div className="px-4 transition-colors duration-200 transform hover:bg-gray-100 ">
                  <SaveSched isButton={false} />
                </div>
              </div>
            )}
          </div>
        </header>
      ) : (
        <header className="relative z-20 flex items-center justify-center px-6 py-4 border-b border-gray-200">
          <button
            type="button"
            className="text-xl font-bold text-gray-600"
            onClick={() => {
              router.push("/");
            }}
          >
            Next<span className="text-blue-600">Sched</span>
            <span className="ml-1 text-sm font-medium text-red-600">Beta</span>
          </button>
        </header>
      )}
    </>
  );
};

export default Header;
