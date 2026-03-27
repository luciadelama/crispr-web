import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Orders from "./pages/Orders/Orders"
import Login from "./pages/Login/Login"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

const AppLayout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Orders />
      </div>
    </div>
  )
}

const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        } />
      </Routes>
  )
}

export default App
