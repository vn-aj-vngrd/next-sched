import { PrismaClient } from "@prisma/client";
import { schedData } from "./data";
const prisma = new PrismaClient();

async function main() {
  await prisma.schedule.deleteMany();
  console.log("Deleted all records");

  await prisma.schedule.create({
    data: schedData,
  });
  console.log("Created all records");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
