const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const schemPath = './schema/index.graphql';
const server = new ApolloServer({
  typeDefs: importSchema(schemPath),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando na porta ${url}`)
})
