import { NextApiRequest, NextApiResponse } from "next";
import WeeklyTable from "../../components/Table";
import { ResponseSchedule } from "../../types";

const schedule = ({ userSchedule }: ResponseSchedule) => {
  return (
    <>{userSchedule && <WeeklyTable userSchedule={userSchedule.classes} />}</>
  );
};

export const getServerSideProps = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const id = req.query.id;

  const response = await fetch(`http://localhost:3000/api/schedule/${id}`, {
    method: "GET",
  });

  if (response.status !== 200) {
    return {
      props: {},
    };
  }

  const data = await response.json();
  return {
    props: {
      userSchedule: data,
    },
  };
};

export default schedule;
