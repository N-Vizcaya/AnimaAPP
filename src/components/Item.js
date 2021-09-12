import React from "react";
import { useState, useEffect } from "react";
import css from './Card.css'
import Contador from './ItemCont.js'




const Item = ({name, description, price, img}) => {

      return (
          <div className="card">
              <div className="card-logo">
                  <img src={img} width='300' alt="imgCard" />
              </div>
              <div className="card-content">
                <h1>{name} </h1>  
                <p>{description}</p>
                <p> {price} </p>
              </div>
          </div>
      )
  
}

export default Item












