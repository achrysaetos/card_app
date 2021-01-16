import React from "react"
import { Flex, Text } from "@chakra-ui/react"

export default function Banner() {

  return(
    <Flex p={3} w="100%" h="100px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Text>(Stats)</Text>
    </Flex>
  )

}
