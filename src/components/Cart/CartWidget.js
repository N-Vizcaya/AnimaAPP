import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

export default function Canasta ()  {

    const {getQuantity}= useContext(CartContext)
    
    
return  (
<div className="iconCanasta">
<Link to="/Cart">
<FontAwesomeIcon icon={faShoppingCart} size="2x"/>
{getQuantity()} 
</Link>
</div>
)
}