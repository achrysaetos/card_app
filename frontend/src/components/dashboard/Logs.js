import React from "react"
import { Flex, Text } from "@chakra-ui/react"

export default function Logs() {

  return(
    <Flex p={3} w="50%" h="200px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Text p={3} fontWeight="bold" color="teal.500">Progress Report</Text>
    </Flex>
  )

}
