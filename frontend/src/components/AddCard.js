import React, { useContext } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Box, Flex, Text, Divider, Button, FormControl, useDisclosure, Textarea, IconButton, Heading, Input } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import { AuthContext } from "../context/auth"
import { useForm } from "../util/hooks"
import { FETCH_POSTS_QUERY } from "../graphql/FETCH_POSTS_QUERY"
import { CREATE_POST_MUTATION } from "../graphql/CREATE_POST_MUTATION"

export default function AddCard() {
    const { user } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { values, onChange, onSubmit } = useForm(createPostCallback, { body: "" })

    const [createPost] = useMutation(CREATE_POST_MUTATION, {
      variables: values,
      update(proxy, result) {
        const data = proxy.readQuery({ query: FETCH_POSTS_QUERY })
        proxy.writeQuery({
          query: FETCH_POSTS_QUERY,
          data: { getPosts: [result.data.createPost, ...data.getPosts] }
        })
        values.body = ""
      }
    })
  
    function createPostCallback() { // to call createPost() in useForm()
      createPost()
    }

  return (
    <>
      <IconButton variant="outline" colorScheme="teal" icon={<AddIcon />} size="lg" mr={6} onClick={onOpen}/>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color="teal.500">Add a Card</Text>
            <ModalCloseButton _focus="outline: 0" />
          </ModalHeader>

          <ModalBody>
            { user ? 
              <>
                  <Flex alignItems="flex-end" justify="space-between">
                    <form onSubmit={onSubmit} noValidate>
                      <FormControl>
                        <Input 
                          size="lg" 
                          variant="flushed"
                          focusBorderColor="grey"
                          autoComplete="off"
                          placeholder="Card Number (####-####-####-####)"
                          name="body"
                          type="text"
                          value={values.body}
                          onChange={onChange}
                        />
                        <Input 
                          size="lg" 
                          variant="flushed"
                          focusBorderColor="grey"
                          autoComplete="off"
                          placeholder="CVV (###)"
                          name="body"
                          type="text"
                          value={values.body}
                          onChange={onChange}
                        />
                        <Input 
                          size="lg" 
                          variant="flushed"
                          focusBorderColor="grey"
                          autoComplete="off"
                          placeholder="Expiration Date (##/##)"
                          name="body"
                          type="text"
                          value={values.body}
                          onChange={onChange}
                        />
                        <Input 
                          size="lg" 
                          variant="flushed"
                          focusBorderColor="grey"
                          autoComplete="off"
                          placeholder="Balance Remaining"
                          name="body"
                          type="text"
                          value={values.body}
                          onChange={onChange}
                        />
                      </FormControl>
                      
                      <Button colorScheme="teal" variant="outline" width="full" mt={6} size="lg" type="submit" disabled={values.body.trim() === ""} onClick={onClose}>
                        Add
                      </Button>
                    </form>
                  </Flex>
              </> 
            : "" }
          </ModalBody>
          
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}
