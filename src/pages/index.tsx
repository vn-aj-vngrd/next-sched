import type { NextPage } from "next";
import LeftItem from "../components/LeftItem";
import RightItem from "../components/RightItem";

const Home: NextPage = () => {
  const timeRange: string[] = [
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      <LeftItem timeRange={timeRange} days={days} />
      <RightItem timeRange={timeRange} days={days}/>
    </div>
  );
};

export default Home;
