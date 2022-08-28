import React from "react";
import { TimeSlotProps } from "../types";

const TimeSlot = ({ repeatValue, timeRange }: TimeSlotProps) => {
  return (
    <div
      className="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100 dark:divide-divideColor dark:bg-darkest"
      style={{
        gridTemplateRows: `repeat(${repeatValue}, minmax(2.5rem, 1fr))`,
      }}
    >
      <div className="row-end-1 h-7"></div>

      {timeRange?.map((time, index) => (
        <React.Fragment key={index}>
          <div>
            <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-600 z-20 dark:text-white">
              {time}
              <b></b>
            </div>
          </div>
          <div> </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimeSlot;
