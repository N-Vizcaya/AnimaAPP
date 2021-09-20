import React from "react";
import Contador from "./ItemCont";
import css from "./ItemDetail.css"





const ItemDetail = ({item}) => {
console.log(item?.imgURL)
    


    return(

        <div className="cardDetail">
        <div className="card-photo">
            <img src={"../../"+ item?.imgURL} width='380' alt="imgCard" />
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