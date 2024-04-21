import { Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetails from '../hooks/useGameDetails'

const GameDetail = () => {
  const {slug}= useParams()
  const {data , error, isLoading} = useGameDetails(slug!)
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
    
  )
}

export default GameDetail