import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Provider from './context/ProviderContext';
import Table from './Pages/Table';


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Provider>
        <div className="App App-header">
          <Switch>
              <Route exact path="/" component={ Table } />
          </Switch>
        </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
