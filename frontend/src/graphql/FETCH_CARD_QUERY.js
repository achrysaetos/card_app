import gql from "graphql-tag";

export const FETCH_CARD_QUERY = gql`
  query($cardId: ID!) {
    getCard(cardId: $cardId) {
      id
      cardNumber
      cvvNumber
      expirationMonth
      expirationYear
      balanceRemaining
      createdAt
    }
  }
`;
