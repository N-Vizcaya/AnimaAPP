import './App.css';
import NavBar from './components/NavBar.js'
import { useEffect, useState } from 'react';
import Itemlist from './components/ItemList.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './components/Home.js'
import Programs from './components/Programas';
import Programa from './components/Programa';




 function getList(){
   return new Promise ((resolve, reject) => { 
     const item = 
     [
         {id: 1, name:"Funcional", dias:"Lunes y miercoles", price: "$2500", imgURL:"./img/funcional.jpg"},
         {id: 2, name:"Fitboxing", dias:"Martes y jueves", price: "$2000", imgURL:"./img/fitboxing1.jpg"},
         {id: 3, name:"Futbol Femenino", dias:"Miercoles y viernes", price:"$1800", imgURL:"./img/futbolFem.jpg"}
     ]
     setTimeout(() => resolve(item), 3000)
    
   })
   }

  // function getDetail(){
  // return new Promise ((resolve, reject) => {
  //   const itemDetail = 
  //   [
  //       {id: 1, detail: "Entrenamientos funcionales, para toda persona apta para realizar ejercicio"},
  //       {id: 2, detail: "Toma la parte aerobica del entrenamiento del boxeo"},
  //       {id: 3, detail: "Veni a entrenar con el equipo fememino de  todos los miercoles y viernes"}
  //   ]
  //   setTimeout(() => resolve(itemDetail), 3000)
  // })
  // }


const App = () => {
 

  const [listItem, setListItem] = useState ([])
  

  useEffect(() => {
 const ItemLista = getList()

 ItemLista.then(resultadoPromise => setListItem(resultadoPromise))
 },[]);



return (
 
  <div className="App">
<header>

<BrowserRouter>
<NavBar  />

<Switch>
<Route path="/Itemlist">

    <Itemlist programs={listItem} />
</Route>
 

 <Route path="/Programs">
<Programs prog={listItem} />
</Route>




  

  <Route path="/" exact>
    <Home/>
  </Route>
</Switch>



</BrowserRouter>


</header>



</div>

    );  

}







export default App;
