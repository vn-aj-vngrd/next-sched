/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import TimeSlots from "./TimeSlots";
import AddClass from "./AddClass";
import SaveSched from "./SaveSched";

const WeeklyTable = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const schedules = useSelector((state: RootState) => state.schedule.schedules);

  const container = useRef<{ scrollTop: any; scrollHeight: any }>(null);
  const containerNav = useRef<{ offsetHeight: any }>(null);
  const containerOffset = useRef<{ offsetHeight: any }>(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    if (container.current && containerNav.current && containerOffset.current) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <header className="relative z-20 flex items-center justify-between flex-none px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-500">
          Next<span className="text-blue-500 ">Sched</span>
        </h1>
        <div className="flex items-center">
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <AddClass isButton={true} />

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
            <div className="w-px h-6 mx-6 bg-gray-300" />
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
                    <SaveSched isButton={false} />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <div
        ref={container as React.RefObject<HTMLDivElement>}
        className="flex flex-col flex-auto overflow-auto bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex flex-col flex-none max-w-none sm:max-w-none md:max-w-full"
        >
          {/* Days Row */}
          <div
            ref={containerNav as React.RefObject<HTMLDivElement>}
            className="sticky top-0 z-10 flex-none pr-8 bg-white shadow ring-1 ring-black ring-opacity-5"
          >
            <div className="grid grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:hidden">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex flex-col items-center pt-2 pb-3"
                >
                  {day.substring(0, 3)}
                </button>
              ))}
            </div>

            <div className="hidden grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:grid">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3"
                >
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Time Colum */}
          <div className="flex flex-auto">
            <div className="sticky left-0 flex-none bg-white w-14 ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
                style={{ gridTemplateRows: "repeat(29, minmax(3.5rem, 1fr))" }}
              >
                <div
                  ref={containerOffset as React.RefObject<HTMLDivElement>}
                  className="row-end-1 h-7"
                ></div>
                <TimeSlots />
                <div />
              </div>

              {/* Vertical lines */}
              <div className="grid grid-cols-7 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 ">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="w-8 col-start-8 row-span-full" />
              </div>

              {/* Events */}

              <ol
                className="grid grid-cols-7 col-start-1 col-end-2 row-start-1 pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                {schedules?.map((schedule, index) => (
                  <li
                    key={index}
                    className={schedule.className}
                    style={{
                      gridRow: `${schedule.startingRow} / span ${schedule.timeRange}`,
                    }}
                  >
                    <div
                      className="absolute flex flex-col justify-center p-2 overflow-y-auto text-xs leading-5 text-center rounded-lg group inset-1"
                      style={{
                        backgroundColor: `${schedule.color}`,
                      }}
                    >
                      <p
                        className="text-sm font-semibold text-white"
                        // style={{
                        //   color: `${contrastColor({
                        //     bgColor: schedule.color,
                        //   })}`,
                        // }}
                      >
                        {schedule.classCode}
                      </p>
                      <p
                        className="text-xs text-white"
                        // style={{
                        //   color: `${contrastColor({
                        //     bgColor: schedule.color,
                        //   })}`,
                        // }}
                      >
                        {schedule.instructor}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTable;
