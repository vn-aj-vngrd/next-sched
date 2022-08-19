import type { NextPage } from "next";
import WeeklyTable from "../components/WeeklyTable";

const Home: NextPage = () => {
  return (
    <div className="container items-center mx-auto mt-2 justify-center">
      <WeeklyTable />
    </div>
  );
};

export default Home;
