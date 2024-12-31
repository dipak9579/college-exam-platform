import React from 'react';
import heroImg from "../../assets/examImg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="Hero Background" />
      <div className="hero-content">
        <h1>Welcome to the Exam Portal</h1>
        <p>Your success starts here!</p>
      </div>
    </div>
  );
};

export default Hero;
