import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegistrationPage from './Reg.jsx'
import LoginPage from './Login.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import HomePage from './Home.jsx'
   

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App