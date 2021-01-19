import React from "react"
import { useQuery } from "@apollo/react-hooks" // courtesy of ApolloProvider
import { Spinner, Flex, Text } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import moment from "moment"

import { FETCH_CARDS_QUERY } from "../../graphql/FETCH_CARDS_QUERY"

export default function Logs() {
  const { loading, data } = useQuery(FETCH_CARDS_QUERY)

  return(
    <Flex p={3} w="50%" h="200px" borderWidth={1} boxShadow="sm" align="center" direction="column" overflow="scroll">
      <Text p={3} fontWeight="bold" color="teal.500">Latest Activity</Text>

      <Table variant="simple">
        <TableCaption>All values are pending until verified.</TableCaption>

        <Thead>
          <Tr>
            <Th>Card Number</Th>
            <Th>Value</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>

        <Tbody>
          {loading ? (
            <Spinner size="xl" />
          ) : (
            data.getCards &&
            data.getCards.map((card) => (
              <Tr key={card.id}>
                <Td>************{card.cardNumber.substring(12,16)}</Td>
                <Td>${card.balanceRemaining}</Td>
                <Td>{moment(card.createdAt).format("l")}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Flex>
  )

}
