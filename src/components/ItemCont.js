import { useState, useContext} from "react";
import css from './ItemCont.css'
import Carrito from './CartWidget.js'



const Comprar = ({items, setCount, programsAdded, addProgFunction}) => {

const [quantity, setQuantity] = useState(0);

const onAdd = () => {
    if (quantity < items?.stock)  {
    setQuantity(quantity + 1)
    
    }
    }

const onRemove = () => {
    if (quantity > 0)  {
    setQuantity(quantity - 1)
    
    }
    }
 

const onAddtoCart = () =>{
    // const newProgram = {
    //  ...items,
    // quantity: quantity
    //       }
    // addProgFunction([...programsAdded, newProgram ])
    
      setCount(quantity)
      setQuantity(0)
     }
       

 
    return (

<div className="contador"> 

        	

                
                    
      <button className="Button" onClick={()=> onRemove() }>-</button>
                        
      <span style={{fontSize : '20px'}}> {quantity} </span>
                        
      <button className="Button" onClick={() => onAdd() }>+</button>

                    

     <button onClick={() => onAddtoCart()} > Comprar </button>
                    
                    {/* 
                        <td align="center" colSpan="5"><button className="Button" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                     */}
                   
     <Carrito/>
            
    
</div>
 )
 
} 

export default Comprar 