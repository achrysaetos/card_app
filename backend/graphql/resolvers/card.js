const { AuthenticationError, UserInputError } = require("apollo-server")

const Card = require("../../models/Card")
const checkAuth = require("../../util/check-auth")

module.exports = {
  Query: {
    async getCards() {
      try {
        const cards = await Card.find().sort({ createdAt: -1 }) // latest cards first
        return cards
      } catch (err) {
        throw new Error(err)
      }
    },

    async getCard(_, { cardId }) {
      try {
        const card = await Card.findById(cardId)
        if (card) {
          return card
        } else {
          throw new Error("Card not found")
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  Mutation: {
    async createCard(_, { cardNumber, cvvNumber, expirationMonth, expirationYear, balanceRemaining }, context) {
      const user = checkAuth(context) // check if user is logged in
      if (cardNumber.trim() === "") {
        throw new Error("Card number must not be empty")
      }
      const newCard = new Card({
        cardNumber,
        cvvNumber,
        expirationMonth,
        expirationYear,
        balanceRemaining,
        user: user.id,
        createdAt: new Date().toISOString()
      })
      const card = await newCard.save()
      return card
    },

    async deleteCard(_, { cardId }, context) {
      const user = checkAuth(context)
      try {
        const card = await Card.findById(cardId)
        if (user.user === card.user) { // if user created the card
          await card.delete()
          return "Card deleted successfully"
        } else {
          throw new AuthenticationError("Action not allowed")
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  }
  
}
