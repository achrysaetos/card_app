import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks" // courtesy of ApolloProvider
import { VStack, Spinner } from "@chakra-ui/react"

import { AuthContext } from "../context/auth"
import PostCard from "../components/PostCard"
import PostForm from "../components/PostForm"
import { FETCH_POSTS_QUERY } from "../graphql/FETCH_POSTS_QUERY"

export default function Posts() {
  const { user } = useContext(AuthContext)
  const { loading, data } = useQuery(FETCH_POSTS_QUERY) // get the output from the graphql query

  return(
    <VStack>
      {user && <PostForm />}
      {loading ? (
        <Spinner size="xl" />
      ) : (
        data.getPosts &&
        data.getPosts.map((post) => (
          <PostCard post={post} key={post.id}/>
        ))
      )}
    </VStack>
  )
}