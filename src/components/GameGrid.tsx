import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { platform } from '../hooks/useGames';
import GameCards from './GameCards';
import CardSkeleton from './CardSkeleton';
import { genres } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface props {
  GameQuery: GameQuery
}

const GameGrid = ({GameQuery}: props) => {
  const {data, error, isLoading} = useGames(GameQuery)
  const SkeletonArray = new Array(20).fill(1);
  return (
    <>
     {error && <Text>{error.message}</Text>}
     
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} marginTop='20px' >
        {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
        {data?.results.map(game => <GameCards game={game}/>)}  
     </SimpleGrid>
    </>
  )
}

export default GameGrid