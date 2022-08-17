import { ItemProps, ScheduleType } from "../src/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/app/store";
import { useEffect } from "react";

const RightItem = (props: ItemProps) => {
  const schedule = useSelector((state: RootState) => state.schedule.schedules);
  const timeSlots: string[] = [];

  useEffect(() => {
    console.log(schedule);
  }, [schedule]);

  if (schedule.length === 0) {
    let start = 7;
    let meridiem = "AM";
    for (let i = 0; i < 14; i++, start++) {
      if (start === 13) {
        start = 1;
      }

      if (start === 12) {
        meridiem = "PM";
      }
      timeSlots.push(`${start}:00 ${meridiem} - ${start}:30 ${meridiem}`);
    }
  }

  return (
    <div className="flex flex-col mb-32 space-y-6 md:w-3/4">
      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            {props.days?.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="space-y-4">
          {timeSlots?.map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {schedule?.map((schedule: ScheduleType) => (
        <div key={schedule.classCode}>{schedule.classCode}</div>
      ))}
    </div>
  );
};

export default RightItem;
