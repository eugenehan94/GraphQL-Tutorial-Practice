const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { typeDefs } = require("./schema");

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "World";
    },
    products: (parent, args, context) => {
      return products;
    },
    product: (parent, args, context) => {
      const productId = args.id;
      const product = products.find((product) => product.id === productId);
      if (!product) return null;
      return product;
    },
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => {
      const { id } = args;
      return categories.find((category) => category.id === id);
    },
  },
  Category: {
    products: (parent, args, context) => {
      const categoryId = parent.id;
      return products.filter((product) => product.categoryId === categoryId);
    },
  },
  Product: {
    category: (parent, args, context) => {
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at" + url);
});
