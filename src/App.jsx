import React from 'react'
import { Routes,Route } from 'react-router'
import Landing from './pages/landing/landing'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import ToDoList from './pages/ToDo/ToDoList'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/to-do-list" element={<ToDoList></ToDoList>} />
    </Routes>
  )
}
