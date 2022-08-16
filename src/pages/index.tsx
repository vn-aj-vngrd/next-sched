import type { NextPage } from "next";
import LeftItem from "../sections/LeftItem";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      <LeftItem />
    </div>
  );
};

export default Home;
