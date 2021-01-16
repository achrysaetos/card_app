import React from "react"
import { HStack, VStack } from "@chakra-ui/react"

import Menu from "../components/Menu"
import Graph from "../components/Graph"
import Logs from "../components/Logs"
import Data from "../components/Data"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

export default function Home() {

  return (
    <HStack spacing={3} align="end">
      <Menu />

      <VStack spacing={3} w="100%">
        <HStack w="100%" spacing={3} align="end">
          <VStack w="50%" spacing={3}>
            <Data />
            <Data />
          </VStack>

          <Graph />
        </HStack>
        
        <Banner />

        <HStack w="100%" spacing={3} align="end">
          <Logs />
          <Logs />
        </HStack>

        <Footer />
      </VStack>
    </HStack>
    
  )
  
}
