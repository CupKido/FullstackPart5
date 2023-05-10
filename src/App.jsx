import Login from './Login'
import Todos from './Todos'
import Posts from './posts/Posts'
import Albums from './Albums'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProvider from './UserContext'

function App() {
  
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Todos" element={<Todos />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Album" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
