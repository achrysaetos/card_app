import gql from "graphql-tag";

export const CREATE_CARD_MUTATION = gql`
  mutation createCard(
    $cardNumber: String!
    $cvvNumber: String!
    $expirationMonth: String!
    $expirationYear: String!
    $balanceRemaining: String!
  ) {
    createCard(
      cardNumber: $cardNumber
      cvvNumber: $cvvNumber
      expirationMonth: $expirationMonth
      expirationYear: $expirationYear
      balanceRemaining: $balanceRemaining
  ) {
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
