import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function OrderTable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState();

//MAKE A TRACE ORDER BUTTON WHICH SHOULD SHOW ALL THE DATA 
//likely can make a component for instance <TraceOrder data={props.data} /> because tableDataArray found below, has all data whose property is not an object/array because you cannot display an object/array on table, 
//props.data is the entire data, so send it as props,and destructure using loops and stuff for object/arrays and display


  useEffect(() => {
    console.log(props.data)
    let tableDataArray = []
    props.data.map((obj) => {
      const tableObj = {}
      for(let item in obj){
        // console.log(typeof obj[item] + ' ' + obj[item])
        // if(typeof obj[item] != 'object'){
        if(['timeAdded', 'description', 'price', 'quantity'].find((x)=> x === item)){
          console.log(item)
          tableObj[item] = obj[item]
        }
      }
      tableDataArray.push(tableObj)
      console.log(tableDataArray)
      setState(tableDataArray)
    })
  },[])
  useEffect(()=>{
    setIsLoading(false);
  },[state])
  
  return (
    // <Table striped bordered hover>
    <>
    { 
    isLoading ?  (
      <h2>Loading...</h2>
    ) : 
    (
    <table class="table">
      <thead class="thead-dark">
      {/*}   <tr>
       {Object.keys(state[0]).map((key, index) => {
        return <th key = {index}>{key.toUpperCase()}</th>
      })} 
      <th>Medicine Address</th> 
      <th>Description</th>
      <th>Price</th>
      <th>Quantity</th>
      </tr> */}
      <tr>
        <th scope="col">Date of Order</th>
        <th scope="col">Medicine Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Click to Trace</th>
      </tr>
     </thead>
     <tbody>

    {state.map((item) => (
      <tr key={item._id}>
        {Object.values(item).map((val) => (
          <td>{val}</td>
        ))}
      </tr> 
        // <button>Trace</button>
    ))}  
    </tbody>
    </table>
    )
      }
    </>
    // </Table> */}

    // <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>First Name</th>
    //       <th>Last Name</th>
    //       <th>Username</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td colSpan={2}>Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
}

export default OrderTable;