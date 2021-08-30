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
    <a class="nav-link" href="index.html"> Inicio</a>
    <a class="nav-link" href="nosotros.html"> Nosotros</a>
    </nav>
    </div>);
}

export default NavBar