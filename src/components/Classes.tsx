import { useDispatch } from "react-redux";
import { deleteScheduleState } from "../app/features/scheduleSlice";
import { XIcon } from "@heroicons/react/solid";
import { Schedule } from "../types";
import { useRouter } from "next/router";

const Classes = ({ scheduleState }: Schedule) => {
  const dispatch = useDispatch();
  const route = useRouter().route;

  return (
    <ol
      className="grid grid-cols-7 col-start-1 col-end-2 row-start-1 sm:pr-8"
      style={{
        gridTemplateRows: "1.75rem repeat(174, minmax(0, 1fr))",
      }}
    >
      {scheduleState?.map((sched, index) => (
        <li
          key={index}
          className={`relative flex mt-px ${sched.day}`}
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
            {route === "/" && (
              <button
                type="button"
                className="absolute top-2 right-2"
                onClick={() => {
                  console.log(sched.id);
                  dispatch(deleteScheduleState(sched.id));
                }}
              >
                <XIcon className="h-4 text-white bg-red-500 border border-white rounded-lg" />
              </button>
            )}

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
  );
};

export default Classes;
