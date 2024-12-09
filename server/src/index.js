const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");


async function startApolloServer( ) {
  const server  =  new ApolloServer({ typeDefs });
   const { url }  = startStandaloneServer(server)
    console.log(`
      Server is running!
      Query at ${url}
     
      `)
  }

  startApolloServer();