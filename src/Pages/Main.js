import React, {useContext} from 'react';

import context from '../context/contex';

import logo from '../logo.svg';

function Main({history}) {
  const {handleChange} = useContext(context);
  return (
    <div>
       <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Word</p>
       <input name="name" onChange={handleChange} />
      <button onClick={() => history.push('/sauder') }>saudação</button>
    </div>
  )
}

export default Main;
