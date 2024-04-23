import { Grid, Text } from '@chakra-ui/react'
import React from 'react'
import DefinitionItems from './DefinitionItems'
import Metacritic from './Metacritic'
import { Game } from '../entities/Game'

interface props{
    data?: Game
}

const GameAttributes = ({data}: props) => {
  return (
    <Grid
      templateColumns="repeat(2, 0.4fr)"
      templateRows="repeat(2, 0.4fr)"
      gap={4}
    >
      <DefinitionItems terms="Platforms">{data?.parent_platforms.map(p=> <Text>{p.platform.name}</Text>)}</DefinitionItems>
      <DefinitionItems terms="Metascore">{data?.metacritic? <Metacritic score={data?.metacritic}/>: null}</DefinitionItems>
      <DefinitionItems terms="Genres">{data?.genres.map(g=> <Text>{g.name}</Text>)}</DefinitionItems>
      <DefinitionItems terms="Publishers">{data?.publishers.map(p=> <Text>{p.name}</Text>)}</DefinitionItems>
    </Grid>
  )
}

export default GameAttributes