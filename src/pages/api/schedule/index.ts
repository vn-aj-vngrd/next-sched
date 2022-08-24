import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/client";
import { v4 as uuidv4 } from "uuid";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST /api/schedule
  if (req.method === "POST") {
    const result = await prisma.schedule.create({
      data: {
        classes: req.body,
        code: `nextsched-${uuidv4().substring(0, 6)}`,
      },
    });

    return res.json(result.code);
  }

  // GET /api/schedule
  if (req.method === "GET") {
    const result = await prisma.schedule.findMany({});

    return res.json(result);
  }

  throw new Error(
    `The HTTP ${req.method} method is not supported at this route.`
  );
}
