import React from 'react'
import Search from '../components/home/Search'
import NavBar from '../components/home/NavBar'
import SeccionMovie from '../components/home/SeccionMovie'
import { useEffect, useState } from "react";

const Home = () => {

  const [posters, setPosters] = useState([])
  console.log(posters)
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=77e8c4b872c1f73d67d98342f765eabb")
    .then((response) => response.json())
    .then((data) => setPosters(data.results));
  }, [])

  return (
    <div>
        <Search/>
        <SeccionMovie poster = {posters} title={"New Movies"}/>
        <NavBar/>
    </div>
  )
}

export default Home