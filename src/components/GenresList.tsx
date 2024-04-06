import React from 'react';
import useGenres, { genres } from '../hooks/useGenres';
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import cropImageUrl from '../cropImage';

interface props {
  SelectGenre: (genre: genres) => void;
  highlightSelectGenre: genres | null
}

const GenresList = ({SelectGenre, highlightSelectGenre}: props) => {
    const {data, error, isLoading} = useGenres()
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
                <Button whiteSpace='normal' textAlign='left' fontWeight={genres.id === highlightSelectGenre?.id? "bold": "normal"} onClick={()=> SelectGenre(genres)} variant="link" fontSize="lg"> {genres.name} </Button>
              </HStack> 
            </ListItem>
        )}
      </List>
      
    </>
    
  )
}

export default GenresList