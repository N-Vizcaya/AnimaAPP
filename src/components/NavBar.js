import React from 'react';
import './NavBar.css';
import logo from './imgCom/newAnima.png';
import Canasta from './CartWidget.js';
import { Link, NavLink } from 'react-router-dom';
// import Item from './Item.js'
import Programas from './Programas'
import Programa from './Programa';




const NavBar = () => {
    return (
    <div className="menu">
    <div className="logoBrand">
        
    <Link to="/" >
    <img src={logo} className="logo" alt="logo" width= "100" />
   </Link> 


    </div>
    
    <nav>
    <Link to="/Programs"> Programas </Link>    

    {/* {products.map(i => <Link key={i.id} to={`/programa/${i.name}`} activeClassName="NavLink">{i.name} </Link> )} */}
    <div className="iconoCanasta">
    <Canasta/>    
    </div>
    </nav>
    </div>);
}

export default NavBar