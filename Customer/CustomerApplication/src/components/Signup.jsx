import React, { useState } from "react";
import "./../pages/start/start.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

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
    <div className="start">
      <div className="startTitle">
        <h1>PharmaBlocks</h1>
      </div>
      <form onSubmit={handleSubmit} >
      <h2>Sign up</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.p} onChange={handleChange}/>

      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" value={formData.address} onChange={handleChange}/>

      <button type="submit" onClick={() => {
        window.location.href = '/login'
      }}>Submit</button>
      </form>
      <br />
      <a href="/login">Have an account?, Log in!</a>

    </div>
  )
}

export default Signup