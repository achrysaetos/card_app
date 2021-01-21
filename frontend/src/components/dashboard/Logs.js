import React from "react"
import { Flex, Text, VStack } from "@chakra-ui/react"
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export default function Logs({ cards }) {

  var runningSum = 0
  const data = cards.map(cards.pop,[...cards]) // reverse the copy of the array (cards is cached, so must not mutate it directly)
  for (var i=0; i<data.length; i++){
    runningSum = (parseFloat(runningSum) + parseFloat(data[i].balanceRemaining)).toFixed(2)
    data[i].cardValue = parseFloat(data[i].balanceRemaining)
    data[i].name = "Card Value"
  }
  var interestEarned = (runningSum*.08).toFixed(2)
  const amountAdded = parseFloat(runningSum).toFixed(2)
  const yourBalance = (parseFloat(amountAdded) + parseFloat(interestEarned)).toFixed(2)
  const data2 = [
    {
      "name": "Amount Added",
      "value": parseFloat(runningSum)
    },
    {
      "name": "Interest Earned",
      "value": parseFloat(interestEarned)
    }
  ]
  
  return(
    <Flex p={3} w="50%" h="200px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Text p={3} fontWeight="bold" color="teal.500">Progress Report</Text>
      
      <Flex width="100%" height="100%"  align="center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Tooltip />
            <Pie data={data} dataKey="cardValue" nameKey="name" outerRadius="80%" fill="#8884d8" />
            <Pie data={data2} dataKey="value" nameKey="name" innerRadius="85%" outerRadius="100%" fill="#82ca9d" />
          </PieChart>
        </ResponsiveContainer>

        <VStack alignItems="left">
          <Text color="#8884d8">Amount Added (${amountAdded})</Text>
          <Text color="#82ca9d">Your Balance (${yourBalance})</Text>
        </VStack>
      </Flex>
    </Flex>
  )

}
