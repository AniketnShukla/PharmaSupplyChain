import React from "react";
import "./home.css";
import { Navbar } from "../../components/navbar";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeTitle">
        <h1>
          Welcome to <span class="fancy">PharmaBlocks</span>
        </h1>
      </div>
    </div>
  );
};
