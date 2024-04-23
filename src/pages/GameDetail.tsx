import { Badge, Grid, Heading, Text, color } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetails from '../hooks/useGameDetails'
import ExpandableText from '../components/ExpandableText'
import DefinitionItems from '../components/DefinitionItems'
import Metacritic from '../components/Metacritic'
import GameAttributes from '../components/GameAttributes'

const GameDetail = () => {
  const {slug}= useParams()
  const {data , error, isLoading} = useGameDetails(slug!)
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <GameAttributes data={data}/>  
    </>
    
  )
}

export default GameDetail