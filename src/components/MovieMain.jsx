import React from 'react'
import { Gender } from './Gender'
import movie from "../assets/movie.json"
import "./MovieMain.css"

export const MovieMain = ({dogs}) => {
  return (
    <div className='movie-main-container'>
        <img src={dogs[0]?.url} alt="" />
        <Gender movie = {movie}/>
        <span>
            {
                movie.resume
            }
        </span>
    </div>
  )
}
