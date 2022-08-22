import type { NextPage } from "next";
import Table from "../components/Table";
import WeeklyTable from "../components/WeeklyTable";

const Home: NextPage = () => {
  return (
    <div className="container items-center justify-center mx-auto mt-2">
      <WeeklyTable />
      {/* <Table /> */}
    </div>
  );
};

export default Home;
