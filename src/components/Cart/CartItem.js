import React, {useState, useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import { CardActions, CardMedia, Card
  } from "@material-ui/core";
import "../ItemDetail.css"

  const CartItem = ({item, setCantidad}) =>{
   
    const {removeItem} = useContext(CartContext)


    return(
      
      <div className="cardDetail">
        <div className="card-photo">
            <img src={"../../"+ item.imgURL} width='380' alt="imgCard" />
        </div>
        <div className="card-content">
          <h1 className="titulo"> {item.name} </h1>
          <p className="detalles"> {item.description}</p>
          <p className="detalles"> {item.price}</p>
          <button onClick={()=>removeItem(item.id)}>Quitar producto</button>
      </div>
      </div>
      )



    };
    
    export default CartItem;

  

  