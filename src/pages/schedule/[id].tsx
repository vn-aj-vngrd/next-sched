import { NextApiRequest, NextApiResponse } from "next";
import WeeklyTable from "../../components/Table";
import { ResponseSchedule } from "../../types";
import { server } from "../../../config";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTitleState } from "../../app/features/titleSlice";

const Schedule = ({ scheduleState }: ResponseSchedule) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleState(scheduleState.name));
  }, [dispatch, scheduleState.name]);

  return (
    <>
      {scheduleState && (
        <WeeklyTable scheduleState={JSON.parse(scheduleState.classes)} />
      )}
    </>
  );
};

export const getServerSideProps = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const code = req.query.id;

  const response = await fetch(`${server}/api/schedule/${code}`, {
    method: "GET",
  });

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const scheduleState = await response.json();
  return {
    props: {
      scheduleState,
    },
  };
};

export default Schedule;
