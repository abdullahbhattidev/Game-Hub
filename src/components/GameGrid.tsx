import React, { useEffect, useState } from 'react'
import apiClient from '../api-client'
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string
}

interface fetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
  const [games,setgames] = useState<Game[]>([])
  const [error, seterror] = useState("")

  useEffect(()=> {
    apiClient.get<fetchGamesResponse>("/games")
    .then(res => setgames(res.data.results))
    .catch(err => seterror(err.message));
  })

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