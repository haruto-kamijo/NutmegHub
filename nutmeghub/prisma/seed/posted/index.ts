import { prisma } from "..";
import fixture from "./fixture.json";
import type { PrismaPromise, Posted } from "@prisma/client";

export const posted = () => {
  const res: PrismaPromise<Posted>[] = [];
  fixture.forEach((data) => {
    Array.from({ length: 1 }, (_, i) => {
      const row = prisma.posted.create({data});
      res.push(row);
    });
  });
  return res;
};
