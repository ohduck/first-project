import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[name, setName] = useState('default');
  console.log(name);
  return (
    <div className="App">
      <header className="App-header">
        <input type="text"
          value={name}
          onChange={event => setName(event.target.value)}>
        </input>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {name}
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
