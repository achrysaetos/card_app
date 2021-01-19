import gql from "graphql-tag";

export const FETCH_CARDS_QUERY = gql`
  {
    getCards {
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
