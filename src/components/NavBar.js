import {useContext, useState, useEffect} from 'react';
import './NavBar.css';
import logo from './imgCom/newAnima.png';
import Canasta from './CartWidget.js';
import { Link } from 'react-router-dom';
import UserContext from './CartContext/UserContext';





const NavBar = () => {

    // const {user, logout} =  useContext(UserContext)

    

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
    {/* <div className='login'>
        {user?<button onClick={()=>logout()}>logout</button>:<Link to="/login"><button>Inicia sesion</button></Link>}
        {user?<div>{user}</div>:""}
      </div> */}
    </nav>
    </div>
    
    );
}

export default NavBar