import AddClass from "./AddClass";
import SaveSched from "./SaveSchedule";
import { Fragment } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import ResetClass from "./ResetSchedule";
import Link from "next/link";

const Header = () => {
  const path = useRouter().pathname;

  return (
    <header className="relative z-20 flex items-center justify-between flex-none px-6 py-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-500">
        Next<span className="text-blue-500 ">Sched</span>
      </h1>
      {path === "/" ? (
        <div className="flex items-center">
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative space-x-4">
              <AddClass isButton={true} />
              <ResetClass isButton={true} />

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
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="flex items-center p-2 -mx-2 text-gray-400 border border-transparent rounded-full hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="w-5 h-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 overflow-hidden origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none w-36 ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    <AddClass isButton={false} />
                  </Menu.Item>
                  <Menu.Item>
                    <ResetClass isButton={false} />
                  </Menu.Item>
                  <Menu.Item>
                    <SaveSched isButton={false} />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className="flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
          <Link href="/">Create Schedule</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
