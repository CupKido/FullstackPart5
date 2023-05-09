import Login from './Login'
import Todos from './Todos'
import Posts from './posts/Posts'
import Albums from './Albums'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Album" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
