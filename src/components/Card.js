import React from 'react';
import pesas from './img/pesas.jpg'
import css from './Card.css'



export default class Card extends React.Component{
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