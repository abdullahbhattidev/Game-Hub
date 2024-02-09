import React from 'react';
import useGenres from '../hooks/useGenres';


const GenresList = () => {
    const {data, error, isLoading} = useGenres()
  return (
    <>
      {data.map(genres => <li>{genres.name}</li>)}
    </>
    
  )
}

export default GenresList