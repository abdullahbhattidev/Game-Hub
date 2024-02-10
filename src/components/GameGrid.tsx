import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import CardSkeleton from './CardSkeleton';
import { genres } from '../hooks/useGenres';

interface props {
  selectedGenre : genres | null
}

const GameGrid = ({selectedGenre}: props) => {
  const {data, error, isLoading} = useGames(selectedGenre)
  const SkeletonArray = new Array(20).fill(1);
  console.log(selectedGenre?.name)
  return (
    <>
     {error && <Text>{error}</Text>}
     
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} >
        {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
        {data.map(game => <GameCards game={game}/>)}  
     </SimpleGrid>
    </>
  )
}

export default GameGrid