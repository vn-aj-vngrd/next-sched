import { NextApiRequest, NextApiResponse } from "next";
import WeeklyTable from "../../components/Table";
import { ResponseSchedule } from "../../types";
import { server } from "../../../config";
import Clipboard from "../../components/Clipboard";

const schedule = ({ scheduleState }: ResponseSchedule) => {
  return (
    <>
      {scheduleState && (
        <WeeklyTable scheduleState={JSON.parse(scheduleState.classes)} />
      )}
      <Clipboard />
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
