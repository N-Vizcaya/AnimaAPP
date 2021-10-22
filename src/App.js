import './App.css';
import NavBar from './components/Navbar/NavBar.js'
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './components/Home/Home.js'
import Programs from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto.js';
import Cart from './components/Cart/Cart.js'
import {CartContextProvider} from './components/CartContext/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';








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
