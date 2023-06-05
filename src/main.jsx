import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from './components/home/NavBar.jsx'
import App from './App.jsx'
import Home from './screens/Home.jsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Practicando-JohnWick4' element={<App/>}/>
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)
