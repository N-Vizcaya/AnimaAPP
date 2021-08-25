import logo from './logo.svg';
import './App.css';

function App() {

let a, b, rest

[a, b, ...rest] = [10, 20, 45, 85, 90]

console.log (a)
console.log (b)
console.log (rest)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
