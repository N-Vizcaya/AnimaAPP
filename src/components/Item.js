import React from "react";
import css from './Item.css'
import Contador from "./ItemCont";
import LoadingSpin from 'react-loading-spin';
import { Link, NavLink } from 'react-router-dom';









const Item = (program) => {

if(!Item){
return <LoadingSpin/>
}


      return (

    
<div className="card">
                <div className="card-logo">
                    <img src={"../../"+ program?.imgURL} width='350' alt="imgCard" />
                </div>
                <div className="card-content">
                  <h1 className="titulo">{program.name}</h1>
                  <p className="dias">{program.dias}</p>
                <div className="card-price">  
                  <p> {program.price} </p>
                 </div>
                 <Link to={`/programa/${program.name}`} > <a className="btn btn-secondary btn-sm">Ver Detalle</a></Link>
                 <Contador/> 
                </div>
                
            </div>
)
  
}

export default Item












