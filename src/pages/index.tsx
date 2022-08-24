import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import WeeklyTable from "../components/Table";
import Temp from "../components/Temp";

const Home: NextPage = () => {
  const scheduleState = useSelector((state: RootState) => state.scheduleState);

  return (
    <>
      {/* <Temp /> */}
      <WeeklyTable scheduleState={scheduleState} />
    </>
  );
};

export default Home;
