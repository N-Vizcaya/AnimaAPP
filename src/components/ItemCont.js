import { useState } from "react";
import css from './ItemCont.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


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
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}> + </button>
    <FontAwesomeIcon icon={faShoppingCart} size="2x"/> 
    <button onClick={miFuncionRestar} > - </button>
    

</div>
 )
 
} 


export default Contador