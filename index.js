const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Post = require("./models/Post");

const typeDefs = gql`
  type Query {
    getPosts
  }
`;
const resolvers = {
  Query: {
    sayHi: () => `Hello World`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(
    "mongodb+srv://sriramsahu510:sriram510@cluster0.n1taocb.mongodb.net/userDb?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to mongoDB");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server is running at ${res.url}`);
  });
