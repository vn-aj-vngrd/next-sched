import type { NextPage } from "next";
import LeftItem from "../sections/LeftItem";
import RightItem from "../sections/RightItem";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      <LeftItem />
      <RightItem />
    </div>
  );
};

export default Home;
