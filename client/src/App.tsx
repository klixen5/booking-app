import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes, Navigate } from 'react-router'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}