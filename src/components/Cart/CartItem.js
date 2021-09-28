import React, {useState, useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import { Typography, Button, Card, CardActions, CardContent, CardMedia
  } from "@material-ui/core";

  const CartItem = ({item, setCantidad}) =>{
    const [cantidadItem, setCantidadItem] = useState(item.quantity)
    const {removeItem} = useContext(CartContext)


    setCantidad((item.price) * (item.quantity))
    return (
        <Card>
          <CardMedia
            image={item.imgURL}
            alt={item.name}
            
          />
          <CardContent>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h5"> $
              {(item.price) * (item.quantity)}
            </Typography>
          </CardContent>
          <CardActions>
            
              <Button type="button" size="small" onClick={item.quantity - 1}>
                -
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button type="button" size="small" onClick={() => setCantidadItem(Number(item.quantity) + 1)}>
                +
                </Button>
          
            <Button variant="contained" type="button" color="secondary" onClick={() => removeItem(item.id)}>
              Remover
            </Button>
          </CardActions>
        </Card>
      );
    };
    
    export default CartItem;

  

  