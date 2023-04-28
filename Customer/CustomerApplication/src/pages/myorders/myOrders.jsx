import "./myOrders.css";
import { Navbar } from "../../components/navbar";

export const MyOrders = () => {
  return (
    <div className="myOrders">
      <Navbar />
      <div className="myOrdersTitle">
        <h1>Your Orders</h1>
      </div>

      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Date of Order</th>
              <th scope="col">Medicine Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Click to Trace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <button>Trace</button>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <button>Trace</button>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <button>Trace</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
