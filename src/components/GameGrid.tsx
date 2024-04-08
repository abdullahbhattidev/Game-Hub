import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import CardSkeleton from './CardSkeleton';
import GameCards from './GameCards';
import React from 'react';

interface props {
  GameQuery: GameQuery
}

const GameGrid = ({GameQuery}: props) => {
  const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(GameQuery)
  const SkeletonArray = new Array(20).fill(1);
  return (
    <Box>
     {error && <Text>{error.message}</Text>}
     
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} marginTop='20px' >
        {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
        {data?.pages.map((page,index)=>  
        <React.Fragment key={index}>
           {page.results.map(game => <GameCards game={game}/>)}
        </React.Fragment>
        )}
     </SimpleGrid>
     {hasNextPage && <Button marginY={5} onClick={()=> fetchNextPage()}>{isFetchingNextPage? "Loading": "Load More"}</Button>}
    </Box>
  )
}

export default GameGrid