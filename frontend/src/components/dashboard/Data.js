import React from "react"
import { Flex, Text } from "@chakra-ui/react"

export default function Data() {

  return(
    <Flex p={3} w="100%" h="150px" borderWidth={1} boxShadow="sm" direction="column">
      <Text>Your Balance</Text>
    </Flex>
  )

}
