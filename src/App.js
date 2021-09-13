import './App.css';
import NavBar from './components/NavBar.js'
import { useEffect, useState } from 'react';
import Itemlist from './components/ItemList.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import Contador from './components/ItemCont';




function getList(){
  return new Promise ((resolve, reject) => { 
    const item = 
    [
        {id: 1, name:"Funcional", description:"Lunes y miercoles", price: "$2500", imgURL:"./img/funcional.jpg"},
        {id: 2, name:"Fitboxing", description:"Martes y jueves", price: "$2000", imgURL:"./img/fitboxing1.jpg"},
        {id: 3, name:"Futbol Femenino", description:"Miercoles y viernes", price:"$1800", imgURL:"./img/futbolFem.jpg"}
    ]
    setTimeout(() => resolve(item), 3000)
  })
  }

  function getDetail(){
  return new Promise ((resolve, reject) => {
    const itemDetail = 
    [
        {id: 1, detail: "Entrenamientos funcionales, para toda persona apta para realizar ejercicio"},
        {id: 2, detail: "Toma la parte aerobica del entrenamiento del boxeo"},
        {id: 3, detail: "Veni a entrenar todos los miercoles y viernes"}
    ]
    setTimeout(() => resolve(itemDetail), 3000)
  })
  }




const App = () => {

  const [listItem, setListItem] = useState ([])
  
  const [itemDetail, setItemDetail] = useState ([])

  

  useEffect(() => {
const ItemLista = getList()

  ItemLista.then(resultadoPromise => setListItem(resultadoPromise))
},[]);



useEffect(() => {
const itemDetail = getDetail()

itemDetail.then(resultadoDetail => setItemDetail(resultadoDetail))
},[]);




return (
 
  <div className="App">
<header>
    <NavBar/>
    
    
</header>

<body>





<Itemlist items={listItem}/>
<ItemDetailContainer details={itemDetail}/>









</body>




</div>

    );  

}







export default App;
