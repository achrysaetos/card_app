import React, { useContext } from "react"

import { AuthContext } from "../context/auth"
import Landing from "../components/Landing"

export default function Home() {
  const { user } = useContext(AuthContext)
  
  if (user) {
    return <Landing />
  } else {
    return ""
  }
  
}
