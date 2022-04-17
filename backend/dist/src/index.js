"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const context_1 = require("./context");
const schema_1 = require("./schema");
// import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
exports.server = new apollo_server_1.ApolloServer({
    schema: schema_1.schema,
    context: context_1.context,
    introspection: true,
    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
});
const port = process.env.PORT || 3004;
exports.server.listen({ port }).then(({ url }) => {
    console.log(`server ready at ${url}`);
});
//# sourceMappingURL=index.js.map