import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { ProductsProvider } from "./components/ProductsContext";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
   
    <>
    <AuthProvider>
    <ProductsProvider>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/checkout" element={<Checkout />} />
     <Route path="/login" element={<Login />} />
     </Routes>
    </ProductsProvider>
    </AuthProvider>
    </>
  );
}

export default App;
