import { useEffect, useRef, useState } from "react";
import TimeSlots from "./TimeSlots";
import { Schedule } from "../types";

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

  const container = useRef<{ scrollTop: any; scrollHeight: any }>(null);
  const containerNav = useRef<{ offsetHeight: any }>(null);
  const containerOffset = useRef<{ offsetHeight: any }>(null);

  useEffect(() => {
    const currentMinute = new Date().getHours() * 60;
    if (container.current && containerNav.current && containerOffset.current) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, [scheduleState]);

  return (
    <div>
      <div
        ref={container as React.RefObject<HTMLDivElement>}
        className="flex flex-col flex-auto overflow-auto bg-white"
      >
        <div
          style={{ width: "200%", }}
          className="flex flex-col flex-none max-w-none sm:max-w-none md:max-w-full"
        >
          {/* Days Row */}
          <div
            ref={containerNav as React.RefObject<HTMLDivElement>}
            className="sticky top-0 z-20 flex-none pr-8 bg-white shadow ring-1 ring-black ring-opacity-5"
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
            <div className="sticky left-0 z-10 flex-none bg-white w-14 ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
                style={{ gridTemplateRows: "repeat(29, minmax(3.5rem, 1fr))" }}
              >
                <div
                  ref={containerOffset as React.RefObject<HTMLDivElement>}
                  className="row-end-1 h-7 "
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
                {scheduleState?.map((sched, index) => (
                  <li
                    key={index}
                    className={sched.className}
                    style={{
                      gridRow: `${sched.startingRow} / span ${sched.timeRange}`,
                    }}
                  >
                    <div
                      className="absolute flex flex-col justify-center overflow-y-auto text-xs leading-5 text-center rounded-lg group inset-1"
                      style={{
                        backgroundColor: `${sched.color}`,
                      }}
                    >
                      <p
                        className="text-sm font-semibold text-white"
                        // style={{
                        //   color: `${contrastColor({
                        //     bgColor: sched.color,
                        //   })}`,
                        // }}
                      >
                        {sched.classCode}
                      </p>
                      <p
                        className="text-xs text-white"
                        // style={{
                        //   color: `${contrastColor({
                        //     bgColor: sched.color,
                        //   })}`,
                        // }}
                      >
                        {sched.instructor}
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

export default Table;
