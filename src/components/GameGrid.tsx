import React, { useEffect, useState } from 'react'
import apiClient from '../api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';

const GameGrid = () => {
  const {games, error} = useGames()
  return (
    <>
     {error && <Text>{error}</Text>}
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} margin={10} spacing={10} >
      {games.map(game => <GameCards game={game}/>)}  
     </SimpleGrid>
     
     
    </>
  )
}

export default GameGrid