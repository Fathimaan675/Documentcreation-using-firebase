import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Chagebox from './Pages/Chagebox'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
    
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/changebox' element={<Chagebox/>}></Route>
      <Route path='/homeone' element={<Document/>}></Route>
     </Routes>
    </>
  )
}

export default App
