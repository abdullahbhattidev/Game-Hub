import React from 'react';
import useGenres, { genres } from '../hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import cropImageUrl from '../cropImage';

interface props {
  SelectGenre: (genre: genres) => void
}

const GenresList = ({SelectGenre}: props) => {
    const {data, error, isLoading} = useGenres()
    if(isLoading || error) {
      return <Spinner/>
    }
  return (
    <>
      {/* {isLoading || error || <Spinner/>} */}
      <List>
        {data.map(genres => 
            <ListItem paddingY= "5px" > 
              <HStack>
                <Image borderRadius={8} boxSize="32px" src={cropImageUrl(genres.image_background)}/>
                <Button onClick={()=> SelectGenre(genres)} variant="link" fontSize="lg"> {genres.name} </Button>
              </HStack> 
            </ListItem>
        )}
      </List>
      
    </>
    
  )
}

export default GenresList