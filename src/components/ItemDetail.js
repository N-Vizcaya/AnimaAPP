import React from "react";
import Contador from "./ItemCont";


const ItemDetail = (programa) => {

    return(

        <div className="card">
        <div className="card-logo">
            <img  width='350' alt="imgCard" />
        </div>
        <div className="card-content">
          <h1 className="titulo">{programa.name} </h1>
          <p className="detalles"></p>
          <p className="dias"></p>
        <div className="card-price">  
          <p></p>
         </div>
         <button>Detalles</button>
         <Contador/> 
        </div>
        
    </div>
)

}

   

export default ItemDetail