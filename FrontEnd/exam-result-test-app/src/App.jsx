import { useState } from 'react'
import './App.css'
import LecturePage from './pages/LecturePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DptSecretary from './pages/DptSecretary'
import { useSelector } from 'react-redux'

function App() {
  
  const number = useSelector((store)=>store.numberSlice.number)
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path='/dptSecretary' element={<DptSecretary/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
