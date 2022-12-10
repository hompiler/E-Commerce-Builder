import commonTest from "common";
import initApp from "./server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

initApp();

async function main() {
  await prisma.user.deleteMany();
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log("Prisma Error:\n", e);
    await prisma.$disconnect();
    process.exit(1);
  });
