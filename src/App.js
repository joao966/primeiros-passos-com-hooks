import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [nome, setNome] = useState('');

  const handleNome = () => {
    return setNome('João');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Word</p>
        {nome && (<span>Seja bem-vindo: {nome}</span>)}
        <button onClick={handleNome} >Boas-Vindas</button>
      </header>
    </div>
  );
}
//ADD ao GitHub
export default App;
