import React from "react"
import { Box, Accordion, AccordionItem, AccordionIcon, AccordionPanel, AccordionButton, Avatar, Flex } from "@chakra-ui/react"

export default function Menu() {

  return(
    <Flex px={2} maxW="200px" minW="200px" maxH="500px" minH="500px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Avatar my={6} src="https://bit.ly/broken-link" size="xl"/>
      <Accordion defaultIndex={[0]} w="100%" allowToggle>
        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Dashboard </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Account </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Settings </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Lorem ipsum </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )

}
