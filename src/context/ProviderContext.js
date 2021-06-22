import React, {useState} from 'react';
import context from '../context/contex';


function Provider({children}) {
  const [name, setNome] = useState('');
  
  const handleChange = (event) => {
    const nome = event.target.value;
    return setNome(nome);
  }
  
  const INNITIAL_STATE = {
    nome: name,
    handleChange,
  }

  return (
    <div>
      <context.Provider value={INNITIAL_STATE}>
        {children}
      </context.Provider>
    </div>
  )
}

export default Provider;
