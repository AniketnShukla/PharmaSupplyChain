import "./cart.css";
import { Navbar } from "../../components/navbar";

export const Checkout = () => {
  return (
    <div className="cart">
      <Navbar />
      <div className="cartTitle">
        <h1>
          Your order has been placed<br></br>To trace your orders go to{" "}
          <a>Myorders</a>
        </h1>
      </div>
    </div>
  );
};
