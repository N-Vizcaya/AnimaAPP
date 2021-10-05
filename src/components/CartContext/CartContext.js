import React, { createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    
    const [shoppingCart, setShoppingCart] = useState([])

    const isInCar=(id)=>{
      const result= shoppingCart.some(e=>e.id === id)
      return result
  }

  const addItem=(item, quantity)=>{
    const newProd={...item, quantity: quantity}
    
    if( !isInCar(newProd.id)){
        const arrayProd= [...shoppingCart, newProd]
        setShoppingCart(arrayProd)
    
      }else{
        const newProducts = shoppingCart.map(prod => {
            if(prod.id === item.id) {
                const newProduct = {...prod, quantity: quantity}
                return newProduct
            } else {
                return prod
            }
        })
        setShoppingCart(newProducts)
    }
} 


const getProduct = (id) => {
  return shoppingCart.find(prod => prod.id === id)
}

const removeItem=(itemId)=>{
  const newCart= shoppingCart.filter(e=>e.id !== itemId)
  setShoppingCart(newCart)
}

const clear=()=>{
  setShoppingCart([])
}

const getTotal = () => {
  let total = 0
  shoppingCart.forEach(prod => {
      total = total + prod.price * prod.quantity
  })
  return total
}

const getQuantity = () => {
  let count = 0
  shoppingCart.forEach(prod => {
      count = count + prod.quantity
  })
  return count
}

return(
    <CartContext.Provider 
    value={{
       shoppingCart,
        addItem, 
        removeItem, 
        clear, 
        getProduct, 
        isInCar,
        getTotal,
        getQuantity
      }}
      >
        
        {children}
    </CartContext.Provider>


);


}

