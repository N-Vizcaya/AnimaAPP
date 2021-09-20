import React from "react";
import Contador from "./ItemCont";
import css from "./ItemDetail.css"
import LoadingSpin from 'react-loading-spin';
import { Link, NavLink } from 'react-router-dom';




const ItemDetail = ({item}) => {
  if(!ItemDetail.length === 0){
    return <LoadingSpin/>
    }
    


    return(

        <div className="card">
        <div className="card-logo">
            <img src={"../../"+ item?.imgURL} width='350' alt="imgCard" />
        </div>
        <div className="card-content">
          <h1 className="titulo"> {item?.name} </h1>
          <p className="detalles"> {item?.detalles}</p>
        <div className="card-price">  
          <p> {item?.price} </p>
         </div>
         
         <Contador/> 
        </div>
        
    </div>
)

}

   

export default ItemDetail