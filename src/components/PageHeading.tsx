import { Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import useGameStore from '../stores/GameQueryStore'



const PageHeading = ()=> {
 const{ data: genres} = useGenres()
 const gameQuery=useGameStore(s=> s.gameQuery)
 const genre = genres.results.find(g=> g.id === gameQuery.genreId)

 const{ data: platform} = usePlatforms()
 const platforms = platform.results.find(p=> p.id === gameQuery.platformId)
  return (
    <Heading marginBottom={5}>{`${platforms?.name || " "} ${genre?.name || " "} Games`}</Heading>
  )
}

export default PageHeading