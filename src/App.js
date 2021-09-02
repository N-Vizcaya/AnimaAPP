import './App.css';
import NavBar from './components/NavBar.js'
import marca from './components/animalogo.png'
import Main from './components/Main.js'
import data from './components/data.js'



 const App = () => {
 return (

 <div className="App">
    <header>
        <NavBar/>
   <div className="row">
        <Main/>
        
   </div>    
    </header>
 </div>

    );  

 }







export default App;
