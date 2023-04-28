import React, { useState } from "react";
import "./start.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import Login from "../../components/Login";

export const Start = () => {
  const { loginWithRedirect } = useAuth0();
  const [formData, setFormData] = useState({name: "",email: "", password: "", address: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    //need to understnad the below line 
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}, Message: ${formData.address}`);
    axios.post('http://localhost:3500/customer', 
      formData
    ).then((response) => {
      alert(response.status)
    }).catch((e) => {
      console.log(e);
  })
  }

  return (
    <div className="start">
      <div className="startTitle">
        <h1>PharmaBlocks</h1>
      </div>

    <br />
    <a href="/login">Login</a>
    <br />
    <a href="/Signup">Signup</a>

      <div className="startButton">
        <button className="navButton" onClick={() => loginWithRedirect()}>
          LogIn
        </button>
      </div>
    </div>
  );
};
