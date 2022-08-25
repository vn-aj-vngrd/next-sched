import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET /api/schedule/:id
  if (req.method === "GET") {
    const code = req.query.id;

    const schedule = await prisma.schedule.findFirst({
      where: { code: String(code) },
    });

    if (!schedule) {
      res.status(404).json({ error: "Schedule not found" });
      return;
    }

    return res.json(schedule);
  }
}
