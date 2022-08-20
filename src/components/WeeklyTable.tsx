import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import AddClass from "./AddClass";
// import SaveSchedule from "./SaveSchedule";
import TimeSlot from "./TimeSlots";

const SchedTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const schedules = useSelector((state: RootState) => state.schedule.schedules);

  return (
    <div className="flex flex-col h-full">
      <header className="relative flex items-center justify-between flex-none px-6 py-4">
        <h1 className="text-lg font-semibold text-gray-900">Sched.</h1>
        <div className="flex items-center">
          <div className="flex items-center md:ml-4">
            <AddClass />
            {/* <div className="w-px h-6 mx-3 bg-gray-300" />
            <SaveSchedule /> */}
          </div>
        </div>
      </header>

      <div className="flex flex-col flex-auto overflow-auto bg-white border-t">
        <div className="flex flex-col flex-none max-w-full sm:max-w-none md:max-w-full">
          <div className="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
            <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
              {days?.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex flex-col items-center pt-2 pb-3"
                >
                  {day[0]}
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
          <div className="flex flex-auto">
            <div className="sticky left-0 flex-none bg-white w-14 ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
                style={{ gridTemplateRows: "repeat(29, minmax(3.5rem, 1fr))" }}
              >
                <div className="row-end-1 h-7"></div>

                <TimeSlot />

                <div />
              </div>

              {/* Vertical lines */}
              <div className="hidden grid-cols-7 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
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
                className="grid grid-cols-1 col-start-1 col-end-2 row-start-1 sm:grid-cols-7 sm:pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                {schedules?.map((schedule, index) => (
                  <li
                    key={index}
                    className={`relative flex mt-px sm:col-start-1`}
                    style={{
                      gridRow: `${schedule.startingRow} / span ${schedule.timeRange}`,
                    }}
                  >
                    <a
                      href="#"
                      className="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-blue-50 hover:bg-blue-100"
                    >
                      <p className="order-1 font-semibold text-blue-700">
                        {schedule.instructor}
                      </p>
                      <p className="text-blue-500 group-hover:text-blue-700">
                        <time dateTime="2022-01-12T06:00">6:00 AM</time>
                      </p>
                    </a>
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

export default SchedTable;
