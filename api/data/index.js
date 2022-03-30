const { ApolloServer, gql } = require('apollo-server')

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

type User = {
  nome: string!,
  ativo: boolean!,
  email: string
}

const server = new ApolloServer({ typeDefs, resolvers })
