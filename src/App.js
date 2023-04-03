import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from './components/Footer/footer';
import Home from "./pages/Home/index";
import Products from './pages/Products/products';
import Login from './components/Login/index';
import Register from './components/Register/index';
import CarCheckout from './pages/CarCheckout/CarCheckout';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carcheckout" element={<CarCheckout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
