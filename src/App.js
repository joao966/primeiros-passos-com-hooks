import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Provider from './context/ProviderContext';
import Saudacao from './Pages/Saudacao';
import Main from './Pages/Main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Provider>
        <div className="App App-header">
          <Switch>
            <header className="App-header">
              <Route exact path="/" render={ (props) => <Main {...props} /> } />
              <Route exact path="/sauder" component={ Saudacao } />
            </header>
          </Switch>
        </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
