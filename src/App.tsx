import React from 'react';
import logo from "./esfera.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Parabens!</p>
        <p>Você achou seu DEV!</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/giulianno-zanetti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
