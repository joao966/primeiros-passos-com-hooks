import React, {useEffect, useState} from 'react';
import context from '../context/contex';


function Provider({children}) {
  const [name, setNome] = useState('');

  useEffect(() => {
    if(name.length === 15) {
      alert('max 5 letras')
      document.querySelector('input').value = '';
    }
    console.log(`você digitou: ${name.length} letras`)
  }, [name])
  
  const handleChange = (event) => {
    const nome = event.target.value;
    return setNome(nome);
  }
  
  const GLOBAL_STATE = {
    nome: name,
    handleChange,
  }

  return (
    <div>
      <context.Provider value={GLOBAL_STATE}>
        {children}
      </context.Provider>
    </div>
  )
}

export default Provider;
