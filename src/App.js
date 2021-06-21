import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import contextSauder from './context/contex.js';

import Saudacao from './Pages/Saudacao';

import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setNome] = useState('');

  const handleChange = (event) => {
    const nome = event.target.value;
    return setNome(nome);
  }

  const INNITIAL_STATE = {
    nome: name,
  }

  return (
    <BrowserRouter>
      <contextSauder.Provider value={ INNITIAL_STATE}>
        <div className="App">
          <Switch>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello Word</p>
              <input name="name" onChange={handleChange} />
              <Link to="/sauder">saudação</Link>
              <Route path="/sauder" component={ Saudacao } />
            </header>
          </Switch>
        </div>
      </contextSauder.Provider>
    </BrowserRouter>
  );
}

export default App;
