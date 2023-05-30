import { MovieMain } from './components/MovieMain'
import { TopCastContainer } from './components/TopCastContainer'
import { BookingButton } from './components/BookingButton'

import './App.css'

function App() {

  return (
    <div className="App">
      <MovieMain/>
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default App
