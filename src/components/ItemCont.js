import { useState, useContext} from "react";
import css from './ItemCont.css'
import Carrito from './CartWidget.js'
import { CartContext } from "./CartContext/CartContext";



const Comprar = ({items, onAdd, setItemCount }) => {

    const [count, setCount] = useState(0);
const { quantity, changeQuantity, addItem, productsCart, setProductsCart } =
    useContext(CartContext);


    setItemCount(count);   
    const add = () => {
        if (count < items?.stock) {
          setCount(count + 1);
          changeQuantity(quantity + 1);
        }
      };

const onRemove = () => {
    if (count > 0) {
        setCount(count - 1);
        changeQuantity(quantity - 1);
      }
    };

    const handleOnClick = () => {
        const productsCartId = productsCart?.map(item=> item.id)
       
        if (productsCartId?.includes(items.id)) {
            const updateCart = productsCart?.map (i => {
                if (i.id === items.id){
               
                  let oldQuantity = i.quantity
                  return{
                    ...i,
                    quantity: count + oldQuantity
                  }
                }else{
                  return i
                }
            })
            
            
            setProductsCart(updateCart)
            }  else{const newProduct = {
              ...items,
              quantity: count,
            };
          
            productsCart
              ? addItem([...productsCart, newProduct])
              : addItem([newProduct]);
          } 

          onAdd();
  };


    return (

<div className="contador"> 

        	

                
                    
      <button className="Button" onClick={()=> onRemove() }>-</button>
                        
      <span style={{fontSize : '20px'}}> {count} </span>
                        
      <button className="Button" onClick={() => add() }>+</button>

                    

     <button  onClick={handleOnClick} > Comprar </button>
                    
                    {/* 
                        <td align="center" colSpan="5"><button className="Button" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                     */}
                   
     <Carrito/>
            
    
</div>
 )
 
} 

export default Comprar 