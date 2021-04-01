require('dotenv').config()
const { ApolloServer } = require('apollo-server');

const Query = `
  
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const resolvers = {
  Query: {
    books: () => books,
  },
};
const server = new ApolloServer({
  typeDefs: Query,
  resolvers
});


server.listen(process.env.port || 8081).then(() => {
  console.log(`
    API Gateway Server is running here!
    Listening on port 8080
  `);
});