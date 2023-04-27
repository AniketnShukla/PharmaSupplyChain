import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Start } from "./pages/start/start";
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
