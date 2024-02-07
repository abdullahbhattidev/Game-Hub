import { Badge } from '@chakra-ui/react'
import React from 'react'

interface props {
    score: number
}
const Metacritic = ({score}: props) => {
  return (
    <Badge>{score}</Badge>
  )
}

export default Metacritic