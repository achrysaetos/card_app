import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import { HStack, VStack } from "@chakra-ui/react"

import { AuthContext } from "../context/auth"
import { FETCH_USER_QUERY } from "../graphql/FETCH_USER_QUERY"
import Menu from "../components/dashboard/Menu"
import Graph from "../components/dashboard/Graph"
import Logs from "../components/dashboard/Logs"
import LogsT from "../components/dashboard/Logs_two"
import Data from "../components/dashboard/Data"
import DataT from "../components/dashboard/Data_two"
import Banner from "../components/dashboard/Banner"
import Footer from "../components/dashboard/Footer"

export default function Home() {
  const { user } = useContext(AuthContext)
  const { loading, data } = useQuery(FETCH_USER_QUERY, { variables: { userId: user.id }})

  if (loading) return "loading"
  else {
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
            <LogsT cards={data.getUser.cards} />
          </HStack>

          <Footer />
        </VStack>
      </HStack>
    )

  }
}
