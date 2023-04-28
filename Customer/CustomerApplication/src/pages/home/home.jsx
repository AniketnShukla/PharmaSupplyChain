import React, { useState } from "react";
import "./home.css";
import { Navbar } from "../../components/navbar";
import axios from "axios";
// import jwt from 'jsonwebtoken';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const user = jwt.decode(token)
  //     if (!user) {
  //       localStorage.removeItem('token')
  //       navigate('/login')
  //     } else {

  //     }
  //   }
  // },[])

  return (
    <div className="home">
      <Navbar />
      <div className="homeTitle">
        <h1>Welcome to Pharma Blocks</h1>
        {/* <a href="http://localhost:3500/getMeds"> Get Data</a> */}
        


      </div>
    </div>
  );
};
