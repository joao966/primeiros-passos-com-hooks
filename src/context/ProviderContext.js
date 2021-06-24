import React, {useEffect, useState} from 'react';
import context from '../context/contex';


function Provider({children}) {
  const [name, setNome] = useState('');
  const [Planet, setInput] = useState('');
  const [responseAPI, setResponseAPI] = useState([]);

  useEffect(() => {
    if(name.length === 15) {
      alert('max 15 letras')
      document.querySelector('input').value = '';
    }
    console.log('chamou useEfectt de Provider')
  }, [name])
  
  const fetchAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setResponseAPI(responseJson.results);
  }
  console.log(responseAPI)

  const handleChangeName = (event) => {
    const nome = event.target.value;
    return setNome(nome);
  }

  const handleChangePlanet = (event) => {
    setInput(event.target.value)
  }
  console.log(`aqui${Planet}`)
  
  const GLOBAL_STATE = {
    nome: name,
    handleChangeName,
    fetchAPI,
    responseAPI,
    handleChangePlanet,
    filters: {
      filterByName: {
        name: Planet,
      }
    }
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
