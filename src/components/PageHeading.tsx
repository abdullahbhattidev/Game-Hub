import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface props {
    gameQuery: GameQuery
}

const PageHeading = ({gameQuery}: props) => {
  return (
    <Heading marginBottom={5}>{`${gameQuery.platform?.name || " "} ${gameQuery.genre?.name || " "} Games`}</Heading>
  )
}

export default PageHeading