"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=scripts.js.map