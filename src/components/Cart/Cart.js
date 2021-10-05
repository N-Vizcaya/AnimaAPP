import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import CartItem from './CartItem.js'


const Cart = () =>{
   
const {shoppingCart, clear, getTotal}= useContext(CartContext)



  if(shoppingCart.lenght === 0){
    return(<>
        <h3>No hay productos</h3>
        <Link to="/Programs"> Volver al home</Link>
    </>)
}


return(<>
<div className="cartItem">
  <button id="emptyCart" onClick={()=>clear()}>Vaciar carrito</button>
  {shoppingCart.map(e=><CartItem item={e} />)}
  <h3>Total: {getTotal()}</h3>
</div>  
</>)
}




export default Cart