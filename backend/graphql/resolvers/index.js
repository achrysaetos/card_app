const cardsResolvers = require("./card")
const usersResolvers = require("./users")

// restart the server after changing this file
module.exports = {
  Query: {
    ...cardsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...cardsResolvers.Mutation
  }
}
