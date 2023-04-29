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
        const data = response.data;
        if(data.username){
          alert('Login Successful')
          window.location.href = '/home'
          sessionStorage.setItem('username', data.username)
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
   <div class="bg-img">
      <div class="content">
        <img src={logo} class="logo" />
        <br />
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <div class="field">
            <span class="fa fa-user"></span>
            <input
              type="text"
              id="name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <br />
          <div class="field1">
            <input type="submit" value="Submit" />
          </div>
          <br />
          <div class="signup">
            Don't have an account? <a href="/signup">Signup now</a>
          </div>
        </form>
      </div>
    </div> )
}

export default Login
