import React from 'react'
import Search from '../components/home/Search'
import NavBar from '../components/home/NavBar'
import SeccionMovie from '../components/home/SeccionMovie'
import { useEffect, useState } from "react";

const Home = () => {

  const [newestMovies, setNewestMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setNewestMovies(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setComingSoonMovies(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setTopMovie(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setActionMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <Search/>
        <SeccionMovie category="Newest" movies={newestMovies || []}/>
        <SeccionMovie category="Coming Soon" movies={comingSoonMovies || []}/>
        <SeccionMovie category="Top Movies" movies={topMovie || []}/>
        <SeccionMovie category="Action Movies" movies={actionMovies || []}/>
    </div>
  )
}

export default Home