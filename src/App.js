import './App.css';
import NavBar from './components/NavBar.js'
import {useState } from 'react';
import Itemlist from './components/ItemList.js'
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './components/Home.js'
import Programs from './components/Programas';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './Contacto';
import Cart from './components/Cart/Cart.js'
import {CartContextProvider} from './components/CartContext/CartContext'








const App = () => {
 




return (
 <CartContextProvider>
  <div className="App">
<header>

<BrowserRouter>
<NavBar/>

<Switch>
 
<Route path="/Programs">
<Programs/>
</Route>

<Route path="/programa/:name">
<ItemDetailContainer />
</Route>


<Route path="/Contacto">
<Contacto/>
</Route>

<Route path="/cart">
  <Cart/>
</Route>


<Route path="/" exact>
  <Home/>
</Route>
</Switch>



</BrowserRouter>


</header>



</div>
</CartContextProvider>
    );  

}







export default App;
