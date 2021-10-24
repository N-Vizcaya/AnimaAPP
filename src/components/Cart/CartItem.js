import React, {useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import './CartItem.css'
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  const CartItem = ({item, setCantidad}) =>{
   
    const {removeItem} = useContext(CartContext)


    return(
      
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"../../"+ item?.imgURL} />
    <Card.Body>
      <Card.Title> {item?.name} </Card.Title>
      <Card.Text>
        {item?.description} 
      </Card.Text>
      <Card.Text>
        {item?.dias}
      </Card.Text>
      <Card.Text>
      Cantidad seleccionada: {item.quantity}
      </Card.Text>
      <Button className="bg-danger" onClick={()=>removeItem(item.id)}>Quitar producto</Button> 
    </Card.Body>
  </Card>
          
    
      )



    };
    
    export default CartItem;

  

  