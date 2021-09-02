import React from 'react';
import './NavBar.css';
import marca from './animalogo.png';
import Canasta from './CartWidget.js';



const NavBar = () => {
    return (
    <div className="menu">
    <div className="logoBrand">
    <img src={marca} className="logo" alt="logo" width= "100" />
    </div>
    
    <nav>
    <a className="nav-link" href="index.html"> Inicio</a>         
    <a className="Mi anima" href="miAnima.html"> MI anima </a>
    <a className="nav-link" href="contacto.html"> Contacto</a>
    <div className="iconoCanasta">
    <Canasta/>    
    </div>
    </nav>
    </div>);
}

export default NavBar