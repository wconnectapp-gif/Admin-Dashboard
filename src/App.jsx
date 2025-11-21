import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
