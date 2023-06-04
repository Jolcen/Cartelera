import { useEffect, useState } from "react";

import { MovieMain } from './components/MovieMain'
import { TopCastContainer } from './components/TopCastContainer'
import { BookingButton } from './components/BookingButton'

import './App.css'

function App() {

  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch("https://omdbapi.com/?t=Ready+Player+One&apikey=4a9f0858")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <MovieMain movies={movies} />
      <TopCastContainer movies={movies} />
      <BookingButton/>
    </div>
  )
}

export default App
