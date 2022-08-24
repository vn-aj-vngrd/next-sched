import { NextApiRequest, NextApiResponse } from "next";
import WeeklyTable from "../../components/Table";
import { ResponseSchedule } from "../../types";
import { server } from "../../config";
import FloatingButton from "../../components/FloatingButton";

const schedule = ({ scheduleState }: ResponseSchedule) => {
  return (
    <>
      {scheduleState && <WeeklyTable scheduleState={scheduleState.classes} />}
      <FloatingButton />
    </>
  );
};

export const getServerSideProps = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const id = req.query.id;

  const response = await fetch(`${server}/api/schedule/${id}`, {
    method: "GET",
  });

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const data = await response.json();
  return {
    props: {
      scheduleState: data,
    },
  };
};

export default schedule;
