import React from 'react';
import './NavBar.css';
import logo from './imgCom/newAnima.png';
import Canasta from './CartWidget.js';
import { Link, NavLink } from 'react-router-dom';





const NavBar = () => {
    return (
    <div className="menu">
    <div className="logoBrand">
        
    <Link to="/" >
    <img src={logo} className="logo" alt="logo" width= "100" />
   </Link> 


    </div>
    
    <nav>
    <Link to="/"> Inicio </Link>    
    <Link to="/Programs"> Programas </Link>  
    <Link to="/Contacto"> Contacto </Link> 
    <div className="iconoCanasta">
    <Canasta/>    
    </div>
    </nav>
    </div>);
}

export default NavBar