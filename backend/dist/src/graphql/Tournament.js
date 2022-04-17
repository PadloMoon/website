"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentMutation = exports.TournamentQuery = exports.Tournament = void 0;
const nexus_1 = require("nexus");
exports.Tournament = (0, nexus_1.objectType)({
    name: "Tournament",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.int("fee");
    },
});
exports.TournamentQuery = (0, nexus_1.extendType)({
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
exports.TournamentMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("post", {
            type: "Tournament",
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                fee: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
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
//# sourceMappingURL=Tournament.js.map