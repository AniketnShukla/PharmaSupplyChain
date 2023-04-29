import React, { useState } from "react";
import "./start.css";
import axios from "axios";
import Login from "../../components/Login";
import logo from "../../assets/logo.png";

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
      <img src={logo} class="logo" />
      <p>Meds made easy.</p>
      <div className="Button">
        <a href="/login">
          <button type="button">
            <span></span>LOGIN
          </button>
        </a>
        <a href="/Signup">
          <button type="button">
            <span></span>SIGNUP
          </button>
        </a>
      </div>
    </div>
  );
};
