import { useEffect, useState } from "react";
import TimeSlots from "./TimeSlots";
import { Schedule } from "../types";
import Classes from "./Classes";
import { useRouter } from "next/router";

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

  const pathname = useRouter().pathname;
  const [timeRange, setTimeRange] = useState<string[]>([]);

  useEffect(() => {
    let startingHour = 6;
    const timeRangeData = Array.from({ length: 15 }, (_v, k) => {
      const time =
        k + startingHour < 13 ? k + startingHour : k + startingHour - 12;
      return `${time}${k + startingHour < 12 ? "am" : "pm"}`;
    });
    setTimeRange(timeRangeData);
  }, [pathname, scheduleState]);

  return (
    <>
      <div className="flex flex-col flex-auto overflow-auto bg-white border-b border-gray-200 dark:bg-darker dark:border-divideColor">
        <div
          style={{ width: "200%" }}
          className="flex flex-col flex-none max-w-none sm:max-w-none md:max-w-full"
        >
          {/* Days Row */}
          <div className="sticky top-0 z-20 flex-none pr-8 bg-white border-b border-gray-200 shadow-sm dark:bg-darker dark:border-divideColor">
            <div className="grid grid-cols-7 -mr-px text-sm leading-6 text-white bg-white border-r border-gray-100 divide-x divide-gray-100 sm:hidden dark:divide-divideColor dark:border-divideColor dark:bg-darker">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center pt-2 pb-3 font-medium text-gray-600 dark:text-white"
                >
                  {day.substring(0, 3)}
                </div>
              ))}
            </div>

            <div className="hidden grid-cols-7 -mr-px text-sm leading-6 text-white bg-white border-r border-gray-100 divide-x divide-gray-100 sm:grid dark:divide-divideColor dark:border-divideColor dark:bg-darker">
              <div className="col-end-1 w-14" />
              {days?.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3 text-gray-600 dark:text-white"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          {/* Time Colum */}
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 flex-none bg-white shadow-lg dark:bg-darker w-14 ring-1 ring-gray-100 dark:ring-divideColor" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <TimeSlots repeatValue={29} timeRange={timeRange} />

              {/* Vertical lines */}
              <div className="grid grid-cols-7 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 dark:divide-divideColor">
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
              <Classes scheduleState={scheduleState} gridTemplateRows={174} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
