import { useDispatch, useSelector } from "react-redux";
import { resetSchedule } from "../app/features/scheduleSlice";
import { RootState } from "../app/store";
import { ButtonProps } from "../types";

const ResetSchedule = ({ isButton }: ButtonProps) => {
  const dispatch = useDispatch();
  const userSchedule = useSelector(
    (state: RootState) => state.schedule.userSchedule
  );

  const handleClick = () => {
    if (userSchedule.length !== 0) {
      dispatch(resetSchedule());
      localStorage.clear();
      alert("Schedule reset successfully");
    } else {
      alert("No schedule to reset");
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
          Reset Schedule
        </button>
      ) : (
        <button onClick={handleClick} className="block px-4 py-2 text-sm">
          Reset Schedule
        </button>
      )}
    </>
  );
};

export default ResetSchedule;
