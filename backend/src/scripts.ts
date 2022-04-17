import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allTournaments = await prisma.tournament.findMany();
  console.log("allTournaments", allTournaments);

  const newTournament = await prisma.tournament.create({
    data: {
      fee: 60,
      name: "some stupid shit",
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
