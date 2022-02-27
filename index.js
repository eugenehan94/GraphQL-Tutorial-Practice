const {ApolloServer, gql} = require("apollo-server")

const typeDefs = gql`
    type Query{
        hello: String
        numberOfAnimals: Int
        price: Float
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "World!"
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 2343.12
        }
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers

})

server.listen().then(({url})=>  {
    console.log("Server is ready at" + url)
})  