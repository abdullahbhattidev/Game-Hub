import React from 'react'
import useGameScreenshots from '../hooks/useGameScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react'

interface props{
    Id?:number
}

const GameScreenshots = ({Id}:props) => {
  const {data}= useGameScreenshots(Id)
  return (
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={2} marginY={5}>
        {data?.results.map(images=> <Image src={images.image}/>)}
    </SimpleGrid>
  )
}

export default GameScreenshots