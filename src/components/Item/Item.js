import React from "react";
import './Item.css'
import LoadingSpin from 'react-loading-spin';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';











const Item = ({programs}) => {



if(!Item){
return <LoadingSpin/>
}


      return (

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> {programs.name} </Card.Title>
    <Card.Text>
      {programs.dias}
    </Card.Text>
    <Link to={`/programa/${programs.id}`} > <Button className="bg-danger">Ver Detalle </Button> </Link>
  </Card.Body>
</Card>
)
  
}

export default Item












