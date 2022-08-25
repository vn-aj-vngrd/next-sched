import { useDispatch, useSelector } from "react-redux";
import { resetScheduleState } from "../app/features/scheduleSlice";
import { ButtonProps } from "../types";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import { TrashIcon } from "@heroicons/react/solid";

const ClearSchedule = ({ isButton }: ButtonProps) => {
  const dispatch = useDispatch();
  const scheduleState = useSelector((state: RootState) => state.scheduleState);

  const handleClick = () => {
    if (scheduleState.length !== 0) {
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
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:border-transparent dark:text-white dark:hover:text-gray-200"
        >
          <TrashIcon className="h-5" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="block px-4 py-2 text-sm text-dark"
        >
          Clear Schedule
        </button>
      )}
    </>
  );
};

export default ClearSchedule;
