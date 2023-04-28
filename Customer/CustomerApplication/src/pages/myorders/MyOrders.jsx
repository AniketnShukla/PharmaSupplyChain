import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Navbar } from '../../components/navbar';
import OrderTable from '../../components/OrderTable';


const MyOrders = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [medicineIDs, setMedicineIDs] = useState([]);
    const [medicineInfo, setMedicineInfo] = useState([]);
    const currentUser = sessionStorage.getItem('username')

    useEffect(() => {
        const getOrderIDs = async() => {  
            try{
                const response = await axios.post(`http://localhost:3500/customer/get-all-orders/`, {'username': currentUser})
                setMedicineIDs(response.data)
            }
            catch(e){
                console.log(e)
            }
        }
        getOrderIDs();        
    },[]);
    useEffect(()=>{
        const getOrdersInfo = async() => {  
            try{
            const response = await axios.get(`http://localhost:3500/meds/`)
            const allMeds = response.data;
            const medicineInfoArray = allMeds.filter((med) => {
                return medicineIDs.find(ele => ele.medicineAddress === med.medicineAddress)
                })
            setMedicineInfo(medicineInfoArray)
            }
            catch(e) {
                console.log(e)
            }
        }
        getOrdersInfo();
    },[medicineIDs])
    useEffect(()=>{
        if(medicineInfo.length != 0){
            setIsLoading(false);
        }
    },[medicineInfo])
    console.log(medicineIDs)
    console.log(medicineInfo)

  return (
    <div>
    <Navbar />
    <h2>MyOrders</h2>
    { 
    isLoading ?  (
    <h2>Loading . . . .</h2>
    ) : (    
    <OrderTable data={medicineInfo} />
    )}
    </div>
  )
}

export default MyOrders

// import "./myOrders.css";
// import { Navbar } from "../../components/navbar";

// const MyOrders = () => {
//   return (
//     <div className="myOrders">
//       <Navbar />
//       <div className="myOrdersTitle">
//         <h1>Your Orders</h1>
//       </div>

//       <div>
//         <table class="table">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">Date of Order</th>
//               <th scope="col">Medicine Name</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Price</th>
//               <th scope="col">Click to Trace</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//               <button>Trace</button>
//             </tr>
//             <tr>
//               <th scope="row">2</th>
//               <td>Jacob</td>
//               <td>Thornton</td>
//               <td>@fat</td>
//               <button>Trace</button>
//             </tr>
//             <tr>
//               <th scope="row">3</th>
//               <td>Larry</td>
//               <td>the Bird</td>
//               <td>@twitter</td>
//               <button>Trace</button>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default MyOrders