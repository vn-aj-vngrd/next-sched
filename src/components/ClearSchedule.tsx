import { useDispatch, useSelector } from "react-redux";
import {
  resetScheduleState,
  selectScheduleState,
} from "../app/features/scheduleSlice";
import { ButtonProps } from "../types";
import { toast } from "react-toastify";

const ClearSchedule = ({ isButton }: ButtonProps) => {
  const dispatch = useDispatch();
  const userSchedule = useSelector(selectScheduleState);

  const handleClick = () => {
    if (userSchedule.length !== 0) {
      dispatch(resetScheduleState());
      localStorage.clear();
      toast.success("Schedule is cleared successfully.", {
        position: "bottom-right",
      });
    } else {
      toast.info("Your schedule is currently empty.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {isButton ? (
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-500 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none"
        >
          Clear Schedule
        </button>
      ) : (
        <button onClick={handleClick} className="block px-4 py-2 text-sm">
          Clear Schedule
        </button>
      )}
    </>
  );
};

export default ClearSchedule;
