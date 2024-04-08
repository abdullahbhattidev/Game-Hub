import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface props{
  gameQuery: GameQuery
}

const PageHeading = ({gameQuery}: props) => {
 const{ data: genres} = useGenres()
 const genre = genres.results.find(g=> g.id === gameQuery.genreId)

 const{ data: platform} = usePlatforms()
 const platforms = platform.results.find(p=> p.id === gameQuery.platformId)
  return (
    <Heading marginBottom={5}>{`${platforms?.name || " "} ${genre?.name || " "} Games`}</Heading>
  )
}

export default PageHeading