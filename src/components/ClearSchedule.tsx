import { useDispatch, useSelector } from "react-redux";
import { resetScheduleState } from "../app/features/scheduleSlice";
import { ButtonProps } from "../types";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import { TrashIcon } from "@heroicons/react/solid";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const ClearSchedule = ({ isButton }: ButtonProps) => {
  const dispatch = useDispatch();
  const scheduleState = useSelector(
    (state: RootState) => state.scheduleReducer.scheduleState
  );
  const [tooltip, showTooltip] = useState(true);

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
      {tooltip && (
        <ReactTooltip id="clearSched" effect="float" place="bottom" />
      )}

      {isButton ? (
        <button
          data-for="clearSched"
          data-tip="Clear Schedule"
          onMouseLeave={() => {
            showTooltip(false);
            setTimeout(() => showTooltip(true), 50);
          }}
          type="button"
          onClick={handleClick}
          className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:border-transparent dark:text-white dark:hover:text-gray-200"
        >
          <TrashIcon className="h-5" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-full justify-start flex px-4 py-2 text-sm text-dark dark:text-white"
        >
          Clear Schedule
        </button>
      )}
    </>
  );
};

export default ClearSchedule;
