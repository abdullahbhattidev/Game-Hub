import { Box, Card, CardBody, HStack, Heading, Image, transition } from '@chakra-ui/react'
import cropImageUrl from '../cropImage'
import { Game } from "../entities/Game"
import Emojis from './Emojis'
import Metacritic from './Metacritic'
import PlatformIconList from './PlatformIconList'
import { Link } from 'react-router-dom'
interface props {
    game: Game
}
const GameCards = ({game}: props) => {
  return (
    <Box _hover={{transform: "scale(1.03)", transition: "transform .15s ease-in"}}>
      <Card borderRadius={10} overflow="hidden" boxShadow="0 3px 10px rgb(0 0 0 / 0.2)">
        <Image src={cropImageUrl(game.background_image) }/>
        <CardBody>
            <HStack justifyContent="space-between" marginBottom={5}>
                <PlatformIconList platforms={game.parent_platforms}/>
                <Metacritic score={game.metacritic}/>
            </HStack>
            <Heading  fontSize="2xlg"><Link to={`games/${game.slug}`}>{game.name}</Link> </Heading>
            <Emojis rating={game.rating_top}/>
        </CardBody>
    </Card>
    </Box>
    
  )
}

export default GameCards