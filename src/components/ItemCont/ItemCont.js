import { useState, useContext, useEffect} from "react";
import './ItemCont.css'
import Carrito from '../CartWidget.js';
import { CartContext } from "../CartContext/CartContext";



const Comprar = ({items, cantidad}) => {

    const [count, setCount] = useState(0);
    const {addItem, isInCar, getProduct}= useContext(CartContext)


    useEffect(() => {
      if(isInCar(items.id)) {
         const oldQuantity = getProduct(items.id)?.quantity
         setCount(oldQuantity)
         cantidad(oldQuantity)
      }
  },[])

  const onAddProduct=()=>{
    addItem(items, count)
}


    return (

<div className="contador"> 

        	

                
                    
      <button className="Button" onClick={()=>count>0?setCount(count-1):''}>-</button>
                        
      <span style={{fontSize : '20px'}}> {count} </span>
                        
      <button className="Button" onClick={()=>count<items.stock?setCount(count+1):''}>+</button>

                    

     <button  onClick={onAddProduct} > Comprar </button>
                    
                   
     <Carrito/>
            
    
</div>
 )
 
} 

export default Comprar 