import React from 'react'

import MovieCard from './MovieCard'

import "./SeccionMovie.css"

const SeccionMovie = ({poster, title}) => {

  return (
    <div className='seccionmovie-container'>
      <span className='title'>{title}</span>
      <div className="seccion-slider">
        {
          poster.map((poster) => {
            return <MovieCard image={poster.poster_path} name={poster.title} key={poster.id}/> 
          })
        }
      </div>
    </div>
  )
}

export default SeccionMovie