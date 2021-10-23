import React, {useContext} from 'react';
import './Cart.css'
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import CartItem from './CartItem.js'
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch} from "@firebase/firestore";
import { db } from '../services/Firebase/Firebase';


const Cart = () =>{
   
const {shoppingCart, clear, getTotal}= useContext(CartContext)



  if(shoppingCart.lenght === 0){
    return(<>
        <h1>No hay productos enel carrito</h1>
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
        outOfSotck.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
      }
  })
});


if(outOfSotck.length === 0) {
  addDoc(collection(db, 'reservas'), orden).then(() => {
      batch.commit().then(() => {
          alert('su reserva fue realizada con exito')
      })
  }).catch((error) => {
      alert('Error al ejecutar la reserva', error)
  }).finally(() => {
      clear()
  })
}
}


return(<>
 <div className="cart-container">
        <div className="items">
            {shoppingCart.map(e=><CartItem item={e} />)}
        </div>
        <div className="d-flex justify-content-evenly row">
            <button className="btn btn-secondary col-3"   onClick={()=>clear()} disabled={shoppingCart.lenght === 0} >Vaciar carrito</button>
            <button className="btn btn-success col-3"   onClick={() => ordenConfirm()}>Confirmar Compra</button>
            <h3 className="total">Total: ${getTotal()}</h3>
        </div>
    </div>
</>)
}




export default Cart