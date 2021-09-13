import { useState } from "react";
import css from './ItemCont.css'
import Carrito from './CartWidget.js'


const Contador = () => {
const [count, setCount] = useState(0);
const miFuncionRestar = () => {
    if (count !== 0){
    setCount(count -1)

    }else{
        alert("El carrito esta vacio") //el alert es solo de prueba, no va a estar en el proyecto final
    }
    }
    

 
    return (

<div className="contador"> 
    <div className="conteo">
       <p > {count} </p> 
       </div>  	
    <button className="suma" onClick={() => setCount(count + 1)}> + </button>
    
    <button className="resta" onClick={miFuncionRestar} > - </button>
    <Carrito/>
</div>
 )
 
} 


export default Contador