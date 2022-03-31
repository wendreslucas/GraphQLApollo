const { ApolloServer, gql } = require('apollo-server')
const { userSchema } = require('./user/schema/user.graphql')

const users = [
  {
    nome: 'Wendres',
    ativo: true
  },
  {
    nome: 'Lucas',
    ativo: true
  }
]

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })
