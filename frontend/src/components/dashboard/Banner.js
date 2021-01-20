import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import moment from "moment"

export default function Banner({ cards }) {
  const numCards = cards.length
  const valueAdded = cards.reduce((a, {balanceRemaining}) => a + parseFloat(balanceRemaining), 0).toFixed(2)
  const lastAdded = cards[0].createdAt

  return(
    <Flex p={3} w="100%" h="100px" borderWidth={1} boxShadow="sm" align="center" justify="space-around">
      <Box align="center">
        <Text fontSize="2xl" fontWeight="semibold">{numCards}</Text>
        <Text fontWeight="light">Cards Added</Text>
      </Box>

      <Box align="center">
        <Text fontSize="2xl" fontWeight="semibold">${valueAdded}</Text>
        <Text fontWeight="light">Value Added</Text>
      </Box>

      <Box align="center">
        <Text fontSize="2xl" fontWeight="semibold">{moment(lastAdded).format("l")}</Text>
        <Text fontWeight="light">Last Added</Text>
      </Box>
    </Flex>
  )

}
