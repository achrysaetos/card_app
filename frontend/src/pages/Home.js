import React from "react"
import { HStack, VStack } from "@chakra-ui/react"

import Menu from "../components/dashboard/Menu"
import Graph from "../components/dashboard/Graph"
import Logs from "../components/dashboard/Logs"
import LogsT from "../components/dashboard/Logs_two"
import Data from "../components/dashboard/Data"
import DataT from "../components/dashboard/Data_two"
import Banner from "../components/dashboard/Banner"
import Footer from "../components/dashboard/Footer"

export default function Home() {

  return (
    <HStack spacing={3} align="end">
      <Menu />

      <VStack spacing={3} w="100%">
        <HStack w="100%" spacing={3} align="end">
          <VStack w="50%" spacing={3}>
            <Data />
            <DataT />
          </VStack>

          <Graph />
        </HStack>
        
        <Banner />

        <HStack w="100%" spacing={3} align="end">
          <Logs />
          <LogsT />
        </HStack>

        <Footer />
      </VStack>
    </HStack>
    
  )
  
}
