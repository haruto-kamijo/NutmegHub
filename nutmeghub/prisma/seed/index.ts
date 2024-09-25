import { PrismaClient } from "@prisma/client";
import { account } from "./account";
import { posted } from "./posted";
import { user } from "./user";

export const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);
  await prisma.$transaction([
      ...user(),
      ...posted(),
      ...account(),
  ]);
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
