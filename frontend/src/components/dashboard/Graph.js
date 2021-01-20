import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from "recharts"
import moment from "moment"

export default function Graph({ cards }) {
  var runningSum = 0
  var runningAvg = 0

  const data = cards.map(cards.pop,[...cards]) // reverse the copy of the array (cards is cached, so must not mutate it directly)
  for (var i=0; i<data.length; i++){
    runningSum = (parseFloat(runningSum) + parseFloat(data[i].balanceRemaining)).toFixed(2)
    runningAvg = (runningSum/(i+1)).toFixed(2)

    data[i].amountAdded = runningSum 
    data[i].averageValue = runningAvg 
    data[i].dateAdded = moment(data[i].createdAt).format("M/D")
    data[i].cardValue = parseFloat(data[i].balanceRemaining).toFixed(2)
  }

  return(
    <Flex p={3} w="100%" h="310.5px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Text p={3} fontWeight="bold" color="teal.500">Earnings Overview</Text>
      <ComposedChart width={500} height={250} data={data}>
        <XAxis dataKey="dateAdded" />
        <YAxis type="number" domain={[0, "dataMax+"+runningSum.toString()]}/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amountAdded" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="cardValue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="averageValue" stroke="#ff7300" />
      </ComposedChart>
    </Flex>
  )

}
