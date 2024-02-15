import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { platform } from '../hooks/useGames';
import GameCards from './GameCards';
import CardSkeleton from './CardSkeleton';
import { genres } from '../hooks/useGenres';

interface props {
  selectedGenre : genres | null;
  selectedPlatform :platform | null
}

const GameGrid = ({selectedGenre, selectedPlatform}: props) => {
  const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform)
  const SkeletonArray = new Array(20).fill(1);
  return (
    <>
     {error && <Text>{error}</Text>}
     
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} marginTop='10px' >
        {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
        {data.map(game => <GameCards  game={game}/>)}  
     </SimpleGrid>
    </>
  )
}

export default GameGrid