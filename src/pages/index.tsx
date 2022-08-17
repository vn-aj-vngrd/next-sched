import type { NextPage } from "next";
import WeekTable from "../components/WeekTable";

const Home: NextPage = () => {
  return (
    <div className="container items-center mx-auto mt-2 justify-center">
      <WeekTable />
    </div>
  );
};

export default Home;
