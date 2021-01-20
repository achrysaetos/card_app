import React from "react"
import { Flex, Text, VStack } from "@chakra-ui/react"

export default function Data({ cards }) {
  const valueAdded = cards.reduce((a, {balanceRemaining}) => a + parseFloat(balanceRemaining), 0).toFixed(2)
  const interestEarned = (valueAdded * .08).toFixed(2)
  const yourBalance = (parseFloat(valueAdded) + parseFloat(interestEarned)).toFixed(2)

  return(
    <VStack w="100%" spacing={3}>
      <Flex p={3} w="100%" h="150px" borderWidth={1} boxShadow="sm" direction="column">
        <Text p={3} fontWeight="bold" color="teal.500">Your Balance</Text>
        <Text alignSelf="center" my={4} fontSize="4xl" fontWeight="light">
          ${yourBalance}
        </Text>
      </Flex>

      <Flex p={3} w="100%" h="150px" borderWidth={1} boxShadow="sm" direction="column">
        <Text p={3} fontWeight="bold" color="teal.500">Interest Earned</Text>
        <Text alignSelf="center" my={4} fontSize="4xl" fontWeight="light">
          ${interestEarned}
        </Text>
      </Flex>
    </VStack>
    
  )

}
