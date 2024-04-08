import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import CardSkeleton from './CardSkeleton';
import GameCards from './GameCards';

interface props {
  GameQuery: GameQuery
}

const GameGrid = ({GameQuery}: props) => {
  const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(GameQuery)
  const SkeletonArray = new Array(20).fill(1);
  const fetchedGameCount = data?.pages.reduce((total, page)=> total+ page.results.length,0) || 0;
  return (
    <Box>
     {error && <Text>{error.message}</Text>}
     <InfiniteScroll 
          dataLength={fetchedGameCount}
          next={()=>fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner/>}>
        
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} marginTop='20px' >
            {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
            {data?.pages.map((page,index)=>  
            <React.Fragment key={index}>
              {page.results.map(game => <GameCards game={game}/>)}
            </React.Fragment>
            )}
        </SimpleGrid>   
          
      </InfiniteScroll>
    </Box>
  )
}

export default GameGrid