import React from 'react'
import "./MovieCard.css"

const MovieCard = ({image, name}) => {
  return (
    <div className='moviecard-container'>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} />
      <span>{name}</span>
    </div>
  )
}

export default MovieCard