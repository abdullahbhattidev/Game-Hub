import React from 'react';
import useGenres from '../hooks/useGenres';
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import cropImageUrl from '../cropImage';


const GenresList = () => {
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
                <Text fontSize="lg"> {genres.name} </Text>
              </HStack> 
            </ListItem>
        )}
      </List>
      
    </>
    
  )
}

export default GenresList