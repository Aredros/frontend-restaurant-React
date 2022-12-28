import React from "react";
import logoFoot from "../assets/logo/ohmyfoodwhite.png";
import { Link } from "react-router-dom";

const Footer = ({ src, alt, text }) => {
  return (
    <footer className="footer">
        <img className="footer-logo" src={logoFoot} alt="logo footer"/>
        <p><i className="fas fa-utensils"></i> Proposer un restaurant</p>
        <p><i className="fas fa-hands-helping"></i> Devenir partenaire</p>
        <p>Mentions légales</p>
        <p><Link to="mailto:info@example.com">Contact</Link></p>
    </footer>
  ); 
};

export default Footer;