import { useEffect, useRef, useState } from "react";
import TimeSlots from "./TimeSlots";
import { Schedule } from "../types";
import Classes from "./Classes";

const Table = ({ scheduleState }: Schedule) => {
  const [days] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  return (
    <>
      <div className="flex flex-col flex-auto overflow-auto bg-white border-b border-gray-200 dark:bg-darkest dark:border-darker">
        <div
          style={{ width: "200%" }}
          className="flex flex-col flex-none max-w-none sm:max-w-none md:max-w-full"
        >
          {/* Days Row */}
          <div className="sticky top-0 z-20 flex-none pr-8 border-b border-gray-200 shadow dark:border-darker">
            <div className="grid grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:hidden dark:divide-darker">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center pt-2 pb-3 dark:text-white"
                >
                  {day.substring(0, 3)}
                </div>
              ))}
            </div>

            <div className="hidden grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:grid dark:divide-darker dark:border-darker">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3 dark:text-white"
                >
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Time Colum */}
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 flex-none dark:bg-darkest w-14 ring-1 ring-gray-100 dark:ring-darker" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <TimeSlots />

              {/* Vertical lines */}
              <div className="grid grid-cols-7 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 dark:divide-darker">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="w-8 col-start-8 row-span-full" />
              </div>

              {/* Classes */}
              <Classes scheduleState={scheduleState} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
