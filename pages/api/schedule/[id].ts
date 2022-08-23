import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET /api/schedule/:id
  // 63044f4de17d31eb12ba65fa
  if (req.method === "GET") {
    const id = req.query.id;

    if (id?.length !== 24 || isNaN(Number("0x" + id))) {
      res.status(400).json({ error: "Invalid id" });
    }

    const schedule = await prisma.schedule.findFirst({
      where: { id: String(id) },
    });

    if (!schedule) {
      res.status(404).json({ error: "Schedule not found" });
      return;
    }

    return res.json(schedule);
  }
}
