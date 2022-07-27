import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Cart from './component/Cart'
import MainPage from './component/dashboard/MainPage'
import Admin from './component/dashboard/NestedPages/Admin'
import OrderManagement from './component/dashboard/NestedPages/OrderManagement'
import ProductManagement from './component/dashboard/NestedPages/ProductManagement'
import Home from './component/Home'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Notfound from './component/Notfound'
import Register from './component/Register'
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path='dashboard' element={<MainPage />}>
            <Route path="admin" element={<Admin />} />
            <Route path="pManagement" element={<ProductManagement />} />
            <Route path="oManagement" element={<OrderManagement />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
