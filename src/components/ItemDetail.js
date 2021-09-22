import React, { useState } from "react";
import ItemCount from "./ItemCont";
import css from "./ItemDetail.css"






const ItemDetail = ({item, programsAdded, addProgFunction}) => {
const [count, setCount] = useState([])
console.log(count)


    return(

        <div className="cardDetail">
        <div className="card-photo">
            <img src={"../../"+ item?.imgURL} width='380' alt="imgCard" />
        </div>
        <div className="card-content">
          <h1 className="titulo"> {item?.name} </h1>
          <p className="detalles"> {item?.detalles}</p>
          <p> Stock disponible: {item?.stock} </p>
        <div className="card-price">  
          <p> {item?.price} </p>
         </div>
         
         <ItemCount items={item} programsAdded={programsAdded} addProgFunction={addProgFunction} setCount={setCount} /> 
        </div>
        
    </div>
)

}

   

export default ItemDetail