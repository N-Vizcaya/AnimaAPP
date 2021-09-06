import './App.css';
import NavBar from './components/NavBar.js'
import { useState } from 'react';
import marca from './components/animalogo.png'
import Main from './components/Main.js'
import Contador from './components/ItemCont.js'





 const App = () => {



 return (

  <div className="App">
<header>
    <NavBar/>
     
</header>

<body>
<div className="row">     
<Main/>
</div>  

<Contador/>
    
    


</body>

 </div>

    );  

}







export default App;
