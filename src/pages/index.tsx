import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import WeeklyTable from "../components/Table";
import { persistClass } from "../app/features/scheduleSlice";

const Home: NextPage = () => {
  const userSchedule = useSelector(
    (state: RootState) => state.schedule.userSchedule
  );

  const dispatch = useDispatch();
  const [schedule, setSchedule] = useState(userSchedule);

  useEffect(() => {
    // Update localstorage with new classes
    if (userSchedule.length > 0) {
      localStorage.setItem(
        "localStorageSchedule",
        JSON.stringify(userSchedule)
      );
    }

    // Recover the schedule from local storage when userSchedule is empty
    if (
      userSchedule.length === 0 &&
      localStorage.getItem("localStorageSchedule")
    ) {
      const data = JSON.parse(
        localStorage.getItem("localStorageSchedule") || "[]"
      );
      dispatch(persistClass(data));
    }

    // Update the schedule state with the new schedule
    setSchedule(userSchedule);
  }, [dispatch, userSchedule]);

  return <WeeklyTable userSchedule={schedule} />;
};

export default Home;
