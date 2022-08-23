import { ButtonProps } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const SaveSched = ({ isButton }: ButtonProps) => {
  const schedule = useSelector(
    (state: RootState) => state.schedule.userSchedule
  );
  const handleClick = async () => {
    if (schedule.length !== 0) {
      console.log(schedule);
      await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schedule),
      });
    } else {
      alert("Please add classes to save your schedule");
    }
  };

  return (
    <>
      {isButton ? (
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
        >
          Save Sched
        </button>
      ) : (
        <button onClick={handleClick} className="block px-4 py-2 text-sm">
          Save Schedule
        </button>
      )}
    </>
  );
};

export default SaveSched;
