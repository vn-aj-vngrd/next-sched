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
          type="button"
          onClick={handleClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-600 focus:outline-none"
        >
          Clear
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
