import React from 'react'

import MovieCard from './MovieCard'

import "./SeccionMovie.css"
import { NavLink } from 'react-router-dom'

const SeccionMovie = ({category, movies}) => {

  return (
    <div className='seccionmovie-container'>
      <span className='title'>{category}</span>
      <div className="seccion-slider">
        {
          movies.map((movies) => {
            return <NavLink to={"/Practicando-JohnWick4"}>
                    <MovieCard image={movies.poster_path} name={movies.title} key={movies.id}/>
                  </NavLink> 
          })
        }
      </div>
    </div>
  )
}

export default SeccionMovie