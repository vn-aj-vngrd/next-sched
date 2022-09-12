import { useDispatch } from "react-redux";
import { deleteScheduleState } from "../app/features/scheduleSlice";
import { ClassesProps } from "../types";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const Classes = ({ scheduleState, gridTemplateRows }: ClassesProps) => {
  const dispatch = useDispatch();
  const route = useRouter().route;
  const [tooltip, showTooltip] = useState(true);

  return (
    <ol
      className="grid grid-cols-6 col-start-1 col-end-2 row-start-1 pr-8"
      style={{
        gridTemplateRows: `1.75rem repeat(${gridTemplateRows}, minmax(0, 1fr))`,
      }}
    >
      {scheduleState?.map((sched, index) => (
        <li
          key={index}
          className={`relative flex mt-px col-start-${sched.day}`}
          data-for={`${sched.id}`}
          data-tip="Click to Delete Schedule"
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
          style={{
            gridRow: `${sched.startingRow} / span ${
              sched.endingRow - sched.startingRow
            }`,
          }}
        >
          {tooltip && route === "/" && (
            <ReactTooltip id={`${sched.id}`} effect="float" place="bottom" />
          )}
          <button
            type="button"
            onClick={() => {
              if (route === "/") dispatch(deleteScheduleState(sched.id));
            }}
          >
            <div
              className="absolute flex flex-col justify-center overflow-auto text-xs leading-5 text-center rounded-lg group inset-1"
              style={{
                backgroundColor: `${sched.color}`,
              }}
            >
              <p className="text-sm font-semibold text-white">
                {sched.classCode}
              </p>

              {sched.endingRow - sched.startingRow > 6 && (
                <p className="text-xs text-white">{sched.instructor}</p>
              )}
            </div>
          </button>
        </li>
      ))}
    </ol>
  );
};

export default Classes;
