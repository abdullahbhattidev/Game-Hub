import React from 'react'
import useGameTrailer from '../hooks/useGameTrailer'

interface props{
    Id?:number
}

const GameTrailer = ({Id}: props) => {
  const {data}= useGameTrailer(Id);
  console.log(data)
  if(data?.results[0])
  return (
    <video src={data?.results[0].data[480]} poster={data?.results[0].preview} controls muted/>
  )
}

export default GameTrailer