import React from 'react'
import { Chip } from './Chip'
import "./Gender.css"

export const Gender = ({peli}) => {
  const gender = peli.Genre ? peli.Genre.split(",") : [];
  return (
    <div className='gender-container'>
    {
      gender.map((genero, index) => (
        <Chip genero = {genero} key = {index}/>
      ))
    }
    </div>
  )
}
