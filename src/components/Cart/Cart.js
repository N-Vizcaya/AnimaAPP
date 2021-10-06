import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import CartItem from './CartItem.js'
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch} from "@firebase/firestore";
import { db } from '../services/Firebase/Firebase';


const Cart = () =>{
   
const {shoppingCart, clear, getTotal}= useContext(CartContext)



  if(shoppingCart.lenght === 0){
    return(<>
        <h1>No hay productos</h1>
        <Link to="/Programs"> Volver al home</Link>
    </>)
}

const ordenConfirm = () => {
  const orden = {
    items: shoppingCart,
    total: getTotal(),
    date: Timestamp.fromDate(new Date ())
  }

  const batch = writeBatch(db)
  const outOfSotck= []

  orden.items.forEach((producto, i) => {
    getDoc(doc(db,'items', producto.id)).then(DocumentSnapshot=>{
      if(DocumentSnapshot.data().stock>= orden.items[i].quantity){
          batch.update(doc(db, 'items', DocumentSnapshot.id), {
              stock: DocumentSnapshot.data().stock - orden.items[i].quantity
          })
      }else{
        outOfSotck.push({... DocumentSnapshot.data(), id: DocumentSnapshot.id})
      }
  })
});
if(outOfSotck.length === 0) {
  addDoc(collection(db, 'compras'), orden).then(() => {
      batch.commit().then(() => {
          alert('La orden se ejecuto con exito')
      })
  }).catch((error) => {
      alert('Error al ejecutar la orden', error)
  }).finally(() => {
      clear()
  })
}
}


return(<>
<div className="cartItem">
  <button id="emptyCart" onClick={()=>clear()}>Vaciar carrito</button>
  <button onClick={() => ordenConfirm()}>Confirmar compra</button>
  {shoppingCart.map(e=><CartItem item={e} />)}
  <h3>Total: {getTotal()}</h3>
</div>  
</>)
}




export default Cart