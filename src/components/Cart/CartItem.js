import React, {useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
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
          <p> {item.description}</p>
          <p> $ {item.price}</p>
          <p> Cantidad seleccionada: {item.quantity} </p>
          <button onClick={()=>removeItem(item.id)}>Quitar producto</button>
      </div>
      </div>
      )



    };
    
    export default CartItem;

  

  