import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { context } from "./context";
import { schema } from "./schema";

// import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../.env") });

export const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const port = process.env.PORT || 3004;

server.listen({ port }).then(({ url }) => {
  console.log(`server ready at ${url}`);
});
