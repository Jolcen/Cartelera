import React from 'react'
import { Gender } from './Gender'
import "./MovieMain.css"

export const MovieMain = ({peli}) => {

  return (
    <div className='movie-main-container'>
        <img src={peli.Poster} alt="" />
        <Gender peli={peli}/>
        <span>
            {peli.Plot}
        </span>
    </div>
  )
}
