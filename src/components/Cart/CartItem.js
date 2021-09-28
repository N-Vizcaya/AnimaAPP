import React, {useState, useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import { Typography, Button, Card, CardActions, CardContent, CardMedia
  } from "@material-ui/core";

  const CartItem = ({item, setCantidad}) =>{
   
    const {removeItem} = useContext(CartContext)


    setCantidad(Number(item.price) * Number(item.quantity))
    return (
        <Card>
          <CardMedia
            imagen={item.imgURL}
            alt={item.name}

            
          />
          <CardContent>
         <div className="imagen">
             <img src={item.imgURL} alt="funcional" /> 
         </div>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h5"> $
            {Number(item.price) * Number(item.quantity)}
            </Typography>
          </CardContent>
          <CardActions>
          
              <span>{item.quantity}</span>
              
          
            <Button variant="contained" type="button" color="primary" onClick={() => removeItem(item.id)}>
              Remover
            </Button>
          </CardActions>
        </Card>
      );
    };
    
    export default CartItem;

  

  