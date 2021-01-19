import gql from "graphql-tag";

export const DELETE_CARD_MUTATION = gql`
  mutation deleteCard($cardId: ID!) {
    deleteCard(cardId: $cardId)
  }
`;
