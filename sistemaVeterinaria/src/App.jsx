import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Turnero from './pages/Turnero'
 


function App() {
  const disponibilidad = {
    '2025-05-24': ['10:00', '11:00', '12:30'],
    '2025-05-25': [],
    '2025-05-26': ['09:00', '11:00', '13:00'],
    '2025-06-01': ['08:00', '10:00'],
    '2025-06-15': [],
    // ... otros días
  };




  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
       <Login />
           <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Turnero disponibilidad={disponibilidad} />
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
