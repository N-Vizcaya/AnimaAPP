import React from "react";
import css from './Item.css'

import LoadingSpin from 'react-loading-spin';
import { Link, NavLink } from 'react-router-dom';











const Item = (program) => {



if(!Item){
return <LoadingSpin/>
}


      return (

<div className="card">
    
             <div className="card-content">
                  <h1 className="titulo">{program.name}</h1>
                  <p className="dias">{program.dias}</p>
                <div className="cardLink">  
                <Link to={`/programa/${program.name}`} > <button className="verMas">Ver Detalle </button> </Link>
                 </div>
                 
                </div>
  </div>
)
  
}

export default Item












