import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeeklyTable from "../components/Table";
import {
  persistScheduleState,
  selectScheduleState,
} from "../app/features/scheduleSlice";
import Temp from "../components/Temp";

const Home: NextPage = (props) => {
  const userSchedule = useSelector(selectScheduleState);

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
      dispatch(persistScheduleState(data));
    }

    // Update the schedule state with the new schedule
    setSchedule(userSchedule);
  }, [dispatch, userSchedule]);

  return (
    <>
      {/* <Temp /> */}
      <WeeklyTable scheduleState={schedule} />
    </>
  );
};

export default Home;
