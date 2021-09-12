import './App.css';
import NavBar from './components/NavBar.js'
import { useEffect, useState } from 'react';
import Contador from './components/ItemCont.js'
import Itemlist from './components/ItemList.js'
import { Card, Button } from 'react-bootstrap';


function getList(){
  return new Promise ((resolve, reject) => { 
    const item = 
    [
        {id: 1, name:"Funcional", description:"Lunes y miercoles", price: "$2000", imgURL:"./img/pesas.jpg"},
        {id: 2, name:"Fitboxing", description:"martes y jueves", price: "$2000", imgURL:"./img/pesas.jpg"}
    ]
  setTimeout(() => resolve(item), 3000)
  })
  }

  


const App = () => {

  const [listItem, setListItem] = useState ([])

  useEffect(() => {
const ItemLista = getList()

  ItemLista.then(resultadoPromise => setListItem(resultadoPromise))
},[]);

return (
 
  <div className="App">
<header>
    <NavBar/>
    <Itemlist items={listItem} />
    
    
<div className="row">

</div>

    
</header>






</div>

    );  

}







export default App;
