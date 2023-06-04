import React from 'react'
import { CiSearch } from "react-icons/ci"
import "./Search.css"

const Search = () => {
  return (
    <div className='search-container'>
        <input type="text" placeholder='Search Movie' />
        <CiSearch className='icon' onClick={() => {
            console.log("buscando")
        }} />
    </div>
  )
}

export default Search
