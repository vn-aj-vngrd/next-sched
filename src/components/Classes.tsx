import { Schedule } from "../types";

const Classes = ({ scheduleState }: Schedule) => {
  return (
    <ol
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-7 sm:pr-8"
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
