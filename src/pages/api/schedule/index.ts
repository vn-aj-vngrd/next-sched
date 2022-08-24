import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST /api/schedule
  if (req.method === "POST") {
    // const result = await prisma.schedule.create({
    //   data: {
    //     classes: req.body,
    //   },
    // });

    return res.json({});
  }

  throw new Error(
    `The HTTP ${req.method} method is not supported at this route.`
  );
}
