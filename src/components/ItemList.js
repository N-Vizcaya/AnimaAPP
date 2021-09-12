import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import Item from './Item.js'




const ItemList = ({items}) => {


return(
  <div>
  {items.map(i => <Item key={i.id} description={i.description} name={i.name} price={i.price} img={i.imgURL} />)}
  </div>
)
    

}


 export default ItemList 