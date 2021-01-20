import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import moment from "moment"

export default function Banner({ cards }) {

  var amountAdded = 0
  var lastAdded = 0
  const numCards = cards.length
  if (numCards > 0){
    amountAdded = cards.reduce((a, {balanceRemaining}) => a + parseFloat(balanceRemaining), 0).toFixed(2)
    lastAdded = cards[0].createdAt
  }

  return(
    <Flex p={3} w="100%" h="100px" borderWidth={1} boxShadow="sm" align="center" justify="space-around">
      <Box align="center">
        <Text fontSize="2xl" fontWeight="semibold">{numCards}</Text>
        <Text fontWeight="light">Cards Added</Text>
      </Box>
      
      { numCards > 0 ? (
        <>
          <Box align="center">
            <Text fontSize="2xl" fontWeight="semibold">${amountAdded}</Text>
            <Text fontWeight="light">Amount Added</Text>
          </Box>

          <Box align="center">
            <Text fontSize="2xl" fontWeight="semibold">{moment(lastAdded).format("l")}</Text>
            <Text fontWeight="light">Last Added</Text>
          </Box>
        </>
      ) : "" }
    </Flex>
  )

}
