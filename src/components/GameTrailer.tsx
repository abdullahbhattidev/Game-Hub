import React from 'react'
import useGameTrailer from '../hooks/useGameTrailer'

interface props{
    Id?:number
}

const GameTrailer = ({Id}: props) => {
  const {data}= useGameTrailer(Id);
  if(data?.results[0])
  return (
    <video src={data?.results[0].data[480]} poster={data?.results[0].preview} controls muted/>
  )
  return null
}

export default GameTrailer