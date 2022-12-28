import React from "react";
import logo from "../assets/logo/ohmyfood.png";
import { Link } from "react-router-dom";

const Banner = ({ src, alt, text }) => {
  return (
    <header className="banner">
        <Link to="/">
            <img src={logo} alt="logo ohmyfood"/>
        </Link>
    </header>
  ); 
};

export default Banner;