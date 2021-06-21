import React, {useContext} from 'react';

import contextSauder from '../context/contex.js';


function Saudacao() {
  const {nome} = useContext(contextSauder);
  return (
    <div>
      <h1>Saudação: {nome} </h1>
    </div>
  );
}

export default Saudacao;
