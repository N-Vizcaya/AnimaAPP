import React from 'react';
import './NavBar.css'
import marca from './animalogo.png'



const NavBar = () => {
    return (
    <div className="menu">
    <div className="logoBrand">
    <img src={marca} className="logo" alt="logo" width= "100" />    
    </div>
    
    <nav>
              
    <a className="Mi anima" href="miAnima.html"> MI anima </a>
    <a className="nav-link" href="index.html"> Inicio</a>
    <a className="nav-link" href="contacto.html"> Contacto</a>
    <a className="nav-link" href="programas.html"> Programas</a>
    </nav>
    </div>);
}

export default NavBar