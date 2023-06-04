import { MovieMain } from "./components/movie/MovieMain";
import { TopCastContainer } from "./components/movie/TopCastContainer";
import { BookingButton } from "./components/movie/BookingButton";
import { useEffect, useState } from "react";
import { getMovies } from "./services/movies";

import "./App.css";

function App() {

  const [peli, setPeli] = useState("");
  useEffect(() => {
    getMovies("Ready Player One").then((data) => setPeli(data))
  }, []);

  return (
    <div className="App">
      <MovieMain peli={peli} />
      <TopCastContainer pelis={peli}/>
      <BookingButton/>
    </div>
  )
}

export default App
