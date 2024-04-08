import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import cropImageUrl from '../cropImage'
import { Game } from "../hooks/useGames"
import Emojis from './Emojis'
import Metacritic from './Metacritic'
import PlatformIconList from './PlatformIconList'
interface props {
    game: Game
}
const GameCards = ({game}: props) => {
  return (
    <Card borderRadius={10} overflow="hidden" boxShadow="0 3px 10px rgb(0 0 0 / 0.2)">
        <Image src={cropImageUrl(game.background_image) }/>
        <CardBody>
            <HStack justifyContent="space-between" marginBottom={5}>
                <PlatformIconList platforms={game.parent_platforms}/>
                <Metacritic score={game.metacritic}/>
            </HStack>
            <Heading  fontSize="2xlg">{game.name} </Heading>
            <Emojis rating={game.rating_top}/>
        </CardBody>
    </Card>
  )
}

export default GameCards