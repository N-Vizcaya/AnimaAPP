import React from "react";
import './Item.css'
import LoadingSpin from 'react-loading-spin';
import { Link } from 'react-router-dom';











const Item = ({programs}) => {



if(!Item){
return <LoadingSpin/>
}


      return (

<div className="card">
    
             <div className="card-content">
                  <h1 className="titulo">{programs.name}</h1>
                  <p className="dias">{programs.dias}</p>
                <div className="cardLink">  
                <Link to={`/programa/${programs.id}`} > <button className="verMas">Ver Detalle </button> </Link>
                 </div>
                 
                </div>
  </div>
)
  
}

export default Item












