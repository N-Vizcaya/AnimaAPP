import './App.css';
import NavBar from './components/NavBar.js'
import { useEffect, useState } from 'react';
import Itemlist from './components/ItemList.js'

import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './components/Home.js'
import Programs from './components/Programas';
import Programa from './components/Programa';
import Contacto from './Contacto';
import Cart from './components/Cart/Cart.js'








const App = () => {
 
const[cartPrograms, setCartPrograms] = useState([])



return (
 
  <div className="App">
<header>

<BrowserRouter>
<NavBar/>

<Switch>
 
<Route path="/Programs">
<Programs/>
</Route>

<Route path="/programa/:name">
<Programa programsAdded={cartPrograms} addProgFunction={setCartPrograms} />
</Route>

<Route path="/Cart">
<Cart programsAdded={cartPrograms}  addProgFunction={setCartPrograms} />
</Route>

<Route path="/Contacto">
<Contacto/>
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
