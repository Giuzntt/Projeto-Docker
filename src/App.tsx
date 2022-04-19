import React from 'react';
import logo from "./planet.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://code.org/helloworld"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheca o  Mundo
        </a>
      </header>
    </div>
  );
}

export default App;
