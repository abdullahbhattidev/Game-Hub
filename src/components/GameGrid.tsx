import React, { useEffect, useState } from 'react'
import apiClient from '../api-client'
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const {games, error} = useGames()
  return (
    <>
     {error && <Text>{error}</Text>}
     <ul>
        {games.map(gamesData => <li key={gamesData.id}>{gamesData.name}</li>)}
     </ul>
    </>
  )
}

export default GameGrid