import React, { useState } from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const Signup = () => {
  const navigate = useNavigate()

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
    axios.post('http://localhost:3500/customer/signup', 
      formData
    ).then((response) => {
      alert(response.status)
      if (response.status === 'ok') {
        navigate.push('/login')
      } 
    }).catch((e) => {
      console.log(e);
  })
  }

  return (
<div class="bg-img">
      <div class="content">
        <img src={logo} class="logo" />
        <br />
        <header>Signup </header>
        <form onSubmit={handleSubmit}>
          <div class="field">
            <span class="fa fa-user"></span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div class="field space">
            <span class="fa fa-envelope"></span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.p}
              onChange={handleChange}
              placeholder="Password"
            />
            <span class="show">SHOW</span>
          </div>
          <div class="field space">
            <span class="fa fa-location-dot"></span>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>

          <br />
          <div class="field1">
            <input
              type="submit"
              onClick={(window.location.href = "/login")}
              value="Submit"
            />
          </div>
          <br />
          <div class="signup">
            Have an account? <a href="/Login">Login</a>!
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
