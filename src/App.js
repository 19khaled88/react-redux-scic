import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Notfound from './component/Notfound'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path='/' exact element={<Home />} />
      <Route path='*' element={<Notfound />}/>
      
     </Routes>
    </BrowserRouter>
  );
}

export default App;
