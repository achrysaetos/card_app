import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import moment from "moment"

export default function Logs({ cards }) {

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
          {cards.map((card) => (
            <Tr key={card.id}>
              <Td>************{card.cardNumber.substring(12,16)}</Td>
              <Td>${parseFloat(card.balanceRemaining).toFixed(2)}</Td>
              <Td>{moment(card.createdAt).format("l")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )

}
