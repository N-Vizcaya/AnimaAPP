import React, {useContext, useState} from 'react';
import ItemDetail from "../ItemDetail";
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import Programa from "../ItemDetailContainer";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './CartItem.js'


const Cart = ({items}) =>{
   
    const {productsCart}  = useContext(CartContext);
    const {clear}  = useContext(CartContext);
    const [cantidad, setCantidad] = useState()



    const FilledCart = () => (
        <>
          <Grid container spacing={3}>
            {productsCart?.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  setCantidad={setCantidad}
                />
              </Grid>
            ))}
          </Grid>
         
            <Typography variant="h4">
              Total: $ {cantidad} 
            </Typography>
            <div>
              <Button
               
                onClick={clear}
                
              >
                Vaciar Carrito
              </Button>
              <Button
                component={Link}
                to="/checkout"
                size="large"
                type="button"
                variant="contained"
                color="primary"
                
              >
                Pagar
              </Button>
            </div>
          
        </>
      );
    
    
      const EmptyCart = () => (
        <Typography variant="subtitle1">
          Tu carrito está vacío,  
           <Link to="/Programs">
            buscar productos
          </Link>
          
        </Typography>
      );
    
      return (
        <Container>

        <Typography c variant="h3" gutterBottom>
          Carrito
        </Typography>
        {productsCart ? <FilledCart /> : <EmptyCart />  }
        
      </Container>
      )
    }
    


export default Cart