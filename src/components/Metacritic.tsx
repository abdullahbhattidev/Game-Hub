import { Badge } from '@chakra-ui/react'

interface props {
    score: number
}
const Metacritic = ({score}: props) => {
    let color = score>75? "green" : score>65? "yellow": ""
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={4} fontSize={14}>{score}</Badge>
  )
}

export default Metacritic