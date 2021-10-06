import './App.css';
import NavBar from './components/NavBar.js'
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './components/Home.js'
import Programs from './components/Programas';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './Contacto';
import Cart from './components/Cart/Cart.js'
import {CartContextProvider} from './components/CartContext/CartContext'
import Login from './components/Login/login';








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

<Route path="/programa/:programid">
<ItemDetailContainer />
</Route>


<Route path="/Contacto">
<Contacto/>
</Route>

<Route path="/cart">
  <Cart/>
</Route>

<Route path="/login">
<Login/>
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
