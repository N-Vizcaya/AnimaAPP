import { useState } from "react";
import css from './ItemCont.css'


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

<div> 
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}> Sumar </button>
    <button onClick={miFuncionRestar} > Restar </button>

</div>
 )
 
} 


export default Contador