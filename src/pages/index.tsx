import type { NextPage } from "next";
import Test from "../components/test";
import WeeklyTable from "../components/WeeklyTable";

const Home: NextPage = () => {
  return (
    <div className="container items-center justify-center mx-auto mt-2">
      <WeeklyTable />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
