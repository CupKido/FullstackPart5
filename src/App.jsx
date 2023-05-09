import Login from './Login'
import Todos from './Todos'
import Posts from './posts/Posts'
import Albums from './albums/Albums'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AlbumsRoutes from './albums/AlbumsRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Albums/*" element={<AlbumsRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
