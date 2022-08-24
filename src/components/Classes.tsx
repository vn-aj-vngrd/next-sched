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
      className="grid grid-cols-7 col-start-1 col-end-2 row-start-1 pr-8"
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
          <button
            type="button"
            onClick={() => {
              if (route !== "/") dispatch(deleteScheduleState(sched.id));
            }}
          >
            <div
              className="absolute flex flex-col justify-center overflow-auto text-xs leading-5 text-center rounded-lg group inset-1"
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

              {sched.timeRange > 6 && (
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
              )}
            </div>
          </button>
        </li>
      ))}
    </ol>
  );
};

export default Classes;
