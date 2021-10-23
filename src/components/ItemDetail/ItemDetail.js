import React, { useState } from "react";
import ItemCount from "../ItemCont/ItemCont";
import './ItemDetail.css'
import { Link } from "react-router-dom";





const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState();
  
  return(

        <div className="cardDetail">
        <div className="card-photo">
            <img src={"../../"+ item?.imgURL} width='380' alt="imgCard" />
        </div>
        <div className="card-content">
          <h1 className="titulo"> {item?.name} </h1>
          <p className="detalles"> {item?.description}</p>
          <p> Stock disponible: {item?.stock} </p>
        <div className="card-price">  
          <p> $ {item?.price} </p>
         </div>
         </div> 
        
        <div>
         <ItemCount item={item} stock={5}  cantidad={setCantidad} /> 
        </div>

       <div>
       <Link to="/Programs"><button className="btnBack" > Volver </button></Link>
        </div> 
        
    </div>
 
)}

   
export default ItemDetail