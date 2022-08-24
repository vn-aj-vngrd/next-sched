import { ButtonProps } from "../types";
import { useSelector } from "react-redux";
import { selectScheduleState } from "../app/features/scheduleSlice";
import { server } from "../../config";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useState } from "react";

const SaveSched = ({ isButton }: ButtonProps) => {
  const schedule = useSelector(selectScheduleState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    if (schedule.length !== 0) {
      const formData = JSON.stringify(schedule);

      setIsLoading(true);
      const response = await fetch(`${server}/api/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      window.open(`${server}/schedule/${data}`);
      toast.success("Your schedule has been saved.", {
        position: "bottom-right",
      });
      setIsLoading(false);
    } else {
      toast.info("Your schedule is currently empty.", {
        position: "bottom-right",
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isButton ? (
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
        >
          Save Schedule
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
