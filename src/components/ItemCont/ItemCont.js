import { useState, useContext, useEffect} from "react";
import './ItemCont.css'
import Carrito from '../CartWidget.js';
import { CartContext } from "../CartContext/CartContext";



const Comprar = ({item}) => {

    const [count, setCount] = useState(0);
    const {isInCar, getProduct, addItem}= useContext(CartContext)


    useEffect(() => {
      if(isInCar(item.id)) {
         const oldQuantity = getProduct(item.id)?.quantity
         setCount(oldQuantity)
         
      }
  }, [])

  const onAddProduct=()=>{
    addItem(item, count)
}


    return (

<div className="contador"> 

        	

                
                    
      <button className="Button" onClick={()=>count>0?setCount(count-1):''}>-</button>
                        
      <span style={{fontSize : '20px'}}> {count} </span>
                        
      <button className="Button" onClick={()=>count<item.stock?setCount(count+1):''}>+</button>

                    

     <button  onClick={onAddProduct} > Agregar al carrito </button>
                    
                   
     <Carrito/>
            
    
</div>
 )
 
} 

export default Comprar 