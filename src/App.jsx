import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { Dashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  )
}
