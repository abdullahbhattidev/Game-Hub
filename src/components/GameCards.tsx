import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import {Game} from "../hooks/useGames"
import PlatformIconList from './PlatformIconList'
interface props {
    game: Game
}
const GameCards = ({game}: props) => {
  return (
    <Card borderRadius={10} overflow="hidden" boxShadow="0 3px 10px rgb(0 0 0 / 0.2)">
     <Image src={game.background_image}/>
     <CardBody>
      <Heading fontSize="2xlg">{game.name}</Heading>
      <PlatformIconList platforms={game.parent_platforms}/>
     </CardBody>
        
    </Card>
  )
}

export default GameCards