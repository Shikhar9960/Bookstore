import React from 'react'
import Home from '../src/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Book from '../src/Book/Book'
import Signup from './components/Signup'



const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Book' element={<Book/>} />
      <Route path='/Signup' element={<Signup/>} />
     </Routes>
    </>
  )
}

export default App
