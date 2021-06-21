import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setNome] = useState('');
  const [isRender, setIsRender] = useState(false);

  const handleChange = (event) => {
    return setNome(event.target.value);
  }

  const setRender = () => {
    return setIsRender(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Word</p>
        {isRender && (<span>Seja bem-vindo: {name}</span>)}
        <input name="name" onChange={handleChange} />
        <button onClick={setRender}>saudação</button>
      </header>
    </div>
  );
}

export default App;
