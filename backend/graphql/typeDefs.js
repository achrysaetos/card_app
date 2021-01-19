const { gql } = require("apollo-server")

/*
type [Object] -- list of fields that represents an object that an application client might need to interact with
type Query -- list of available commands that allows clients to fetch the objects that exist in our data graph
type Mutation -- list of available commands that allows clients to modify data
*/
module.exports = gql`
  type Card {
    id: ID!
    cardNumber: String!
    cvvNumber: String!
    expirationMonth: String!
    expirationYear: String!
    balanceRemaining: String!
    createdAt: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  
  type Query {
    getCards: [Card]
    getCard(cardId: ID!): Card
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createCard(cardNumber: String!, cvvNumber: String!, expirationMonth: String!, expirationYear: String!, balanceRemaining: String!): Card!
    deleteCard(cardId: ID!): String!
  }
`
