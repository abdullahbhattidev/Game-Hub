import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import cropImageUrl from '../cropImage';
import useGenres from '../hooks/useGenres';
import useGameStore from '../stores/GameQueryStore';

const GenresList = () => {
    const {data, error, isLoading} = useGenres()
    const{onSelectGenres, gameQuery}=useGameStore()
    if(isLoading || error) {
      return <Spinner/>
    }
  return (
    <>
      <Heading fontSize='2xl' marginY={3}>Genres</Heading>
      <List>
        {data?.results.map(genres => 
            <ListItem key={genres.id} paddingY= "5px" > 
              <HStack>
                <Image borderRadius={8} boxSize="32px" objectFit='cover' src={cropImageUrl(genres.image_background)}/>
                <Button whiteSpace='normal' textAlign='left' fontWeight={genres.id === gameQuery.genreId? "bold": "normal"} onClick={()=> onSelectGenres(genres)} variant="link" fontSize="lg"> {genres.name} </Button>
              </HStack> 
            </ListItem>
        )}
      </List>
      
    </>
    
  )
}

export default GenresList