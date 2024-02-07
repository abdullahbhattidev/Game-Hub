import React, { useEffect, useState } from 'react'
import apiClient from '../api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import CardSkeleton from './CardSkeleton';

const GameGrid = () => {
  const {games, error, isLoading} = useGames()
  const SkeletonArray = new Array(20).fill(1);
  return (
    <>
     {error && <Text>{error}</Text>}
     
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} margin={10} spacing={10} >
        {isLoading && SkeletonArray.map(() => <CardSkeleton/>)}
        {games.map(game => <GameCards game={game}/>)}  
     </SimpleGrid>
    </>
  )
}

export default GameGrid