import './App.css';
import NavBar from './components/NavBar.js'
import { useEffect, useState } from 'react';
import Contador from './components/ItemCont.js'
import pesas from './components/img/pesas.jpg'
import { ListGroup } from 'react-bootstrap';
import ItemList from './components/ItemList.js'
import { Card, Button } from 'react-bootstrap';



const items = [
{id: 1, name:"Funcional", description:"Lunes y miercoles", price: "$2000", imgURL:"components/img/pesas.jpg"},
{id: 2, name:"Fitboxing", description:"martes y jueves", price: "$2000", imgURL:"components/img/pesas.jpg"}
]

function getList(){
return new Promise ((resolve, reject) => {
setTimeout(() => resolve(items), 3000
)
})
}


const App = () => {
const [listItem, setListItem] = useState ([])

  useEffect(() => {
const ItemLista = getList()

ItemLista.then(ItemLista => setListItem(ItemLista) )
}
)

return (
 
  <div className="App">
<header>
    <NavBar/>
    
    
<div className="row">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
  {listItem.map(i => <Card.Title key={i.id}> {i.name} </Card.Title> )}
  {listItem.map(i => <Card.Text key={i.id}> {i.description} </Card.Text> )}
  {listItem.map(i => <Card.Text key={i.id}> {i.price} </Card.Text> )}
    <Button variant="primary">Mas Informacion</Button>
  </Card.Body>
</Card>

</div>

    
</header>






</div>

    );  

}







export default App;
