import { objectType, extendType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Tournament = objectType({
  name: "Tournament",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.int("fee");
  },
});

export const TournamentQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Tournament",
      resolve(parent, args, context, info) {
        return context.prisma.tournament.findMany();
      },
    });
  },
});

export const TournamentMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: "Tournament",
      args: {
        name: nonNull(stringArg()),
        fee: nonNull(intArg()),
      },

      resolve(parent, args, context) {
        const { name, fee } = args;
        const { userId } = context;

        if (!userId) {
          throw new Error("Cannot add tournament without logging in");
        }

        const newTournament = context.prisma.tournament.create({
          data: {
            name,
            fee,
          },
        });
        return newTournament;
      },
    });
  },
});
