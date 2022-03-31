const arrayUsers = [
  {
    nome: 'Wendres',
    email: 'wendres@gmail.com',
    ativo: true
  },
  {
    nome: 'Lucas',
    ativo: true
  }
]

const userResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[1]
  }
}

module.exports = userResolvers
