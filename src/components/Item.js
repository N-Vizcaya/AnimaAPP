import React from "react";
import pesas from './img/pesas.jpg'
import { useState, useEffect } from "react";
import css from './Card.css'
import Contador from './ItemCont.js'


export default class Item extends React.Component{
  render(){
      return (
          <div className="card">
              <div className="card-logo">
                  <img src={pesas} width='300' alt="imgCard" />
              </div>
              <div className="card-content">
                <h1>Funcional</h1>  
                <p>Entrenamientos funcionales diarios</p>
                <p> $2500 </p>
              </div>
          </div>
      )
  }
}












