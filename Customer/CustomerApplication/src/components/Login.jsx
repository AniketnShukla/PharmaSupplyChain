import React, { useState } from "react";
import "./../pages/start/start.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"

const Login = () => {
    // const { loginWithRedirect } = useAuth0();
    const [formData, setFormData] = useState({username: "",password: ""});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      //need to understand the below line 
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
        alert(formData)
        event.preventDefault();
      alert(`Name: ${formData.username}, Password: ${formData.password}`);
      axios.post('http://localhost:3500/customer/login', 
      formData
      ).then((response) => {
        const data = response.json()
        if(data.user){
          alert('Login Successful')
          window.location.href = '/home'
        }
        else{
          alert('Please check your username and password')
        }
        alert(response.data)
        console.log(response.data)
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
    <h2>Log in</h2>
    <label htmlFor="name">Username:</label>
    <input type="text" id="name" name="username" value={formData.username} onChange={handleChange}/>

    {/* <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/> */}

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>

    <button type="submit">Submit</button>
    </form>
    <br />
    <a href="/signup">Don't Have an account?, Sign Up!</a>
  </div>  )
}

export default Login