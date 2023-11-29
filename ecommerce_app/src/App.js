
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"
import { Cart } from "./pages/cart/cart"
import { Shop } from "./pages/shop/shop"
import { ShopcontextProvider } from './context/shop-context';


function App() {
  return (
    <div className='App'>
      <ShopcontextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  );
}

export default App;
