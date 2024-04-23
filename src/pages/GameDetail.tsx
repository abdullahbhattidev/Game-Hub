import { Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetails from '../hooks/useGameDetails'
import ExpandableText from '../components/ExpandableText'
import DefinitionItems from '../components/DefinitionItems'

const GameDetail = () => {
  const {slug}= useParams()
  const {data , error, isLoading} = useGameDetails(slug!)
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <DefinitionItems terms="Platforms">{data?.parent_platforms.map(p=> p.platform.name)}</DefinitionItems>
    </>
    
  )
}

export default GameDetail