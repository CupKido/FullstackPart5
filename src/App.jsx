import Login from './Login'
import Todos from './Todos'
import Posts from './posts/Posts'
import AlbumRoutes from './albums/AlbumsRoutes'
import './App.css'
import {BrowserRouter, Route, Routes, NavLink, redirect } from 'react-router-dom'
import UserProvider from './UserContext'

function App() {
  
  return (
    <UserProvider>
      <BrowserRouter>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink to="/login" activeClassName="active">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Todos" activeClassName="active">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/Posts" activeClassName="active">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/Album" activeClassName="active">Album</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<redirect to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Todos" element={<Todos />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Album/*" element={<AlbumRoutes />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
