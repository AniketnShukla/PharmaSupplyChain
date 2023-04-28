import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Start } from "./pages/start/start";
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyOrders from "./pages/myorders/MyOrders";
import TraceOrder from "./pages/traceorder/TraceOrder";

function App() {
  let loggedIn;
  const user = sessionStorage.getItem('username')
  if(user) {
    loggedIn = true;
  }
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={ loggedIn ? (<Home />) : ( <Navigate replace to ={"/"} />)} />
            <Route path="/shop" element={ loggedIn ? (<Shop />) : ( <Navigate replace to ={"/"} />)} />
            <Route path="/cart" element={ loggedIn ? (<Cart />) : ( <Navigate replace to ={"/"} />)} />
            <Route path="/myorders" element={ loggedIn ? (<MyOrders />) : ( <Navigate replace to ={"/"} />)} />
            <Route path="/traceorder/:medicineAddress" element={ loggedIn ? (<TraceOrder />) : ( <Navigate replace to ={"/"} />)} />
            {/* <Route path="/checkout" element={ loggedIn ? (<Checkout />) : ( <Navigate replace to ={"/"} />)} /> */}
            {/* <Route path="/Cart" element={<Checkout />} /> */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
