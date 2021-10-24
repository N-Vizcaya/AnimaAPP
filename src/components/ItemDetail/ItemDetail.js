import ItemCount from "../ItemCont/ItemCont";
import './detalles.css'
import { Link } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemDetail = ({item}) => {
  
  
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
      <ItemCount item={item}/> 
      <Link to="/Programs"><Button className="bg-danger" > Volver </Button></Link>
    </Card.Body>
  </Card>
        
    
)}

   
export default ItemDetail