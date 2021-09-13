import React from "react";
import css from './Card.css'
import Contador from "./ItemCont";









const Item = ({name, description, price, img,}) => {

      return (

    
<div className="card">
                <div className="card-logo">
                    <img src={img} width='300' alt="imgCard" />
                </div>
                <div className="card-content">
                  <h1 className="titulo">{name}</h1> 
                  <p className="descripcion">{description}</p>
                <div className="card-price">  
                  <p> {price} </p>
                 </div>
                 <button>Detalles</button>{' '}
                 <Contador/> 
                </div>
                
            </div>
)
  
}

export default Item












