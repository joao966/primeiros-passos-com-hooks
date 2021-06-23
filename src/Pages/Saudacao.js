import React, {useContext, useEffect, useState} from 'react';

import contextSauder from '../context/contex.js';

function Saudacao() {
  const [responseAPI, setResponseAPI] = useState([]);
  const [count, setCount] = useState(10);
  const [request, setRequest] = useState(0);
  const {nome} = useContext(contextSauder);

  const interval = setInterval(() => {
    setRequest(state => state + 1)
  }, 3000)

  useEffect(() => {
    fetchAPI();
    console.log('chamou useEfectt')
    return () => { //o return do useEfect é um analogo no componentWillUnmount
      clearInterval(interval)
    }
  }, [request, interval])
  
  const fetchAPI = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const responseJson = await response.json();
    setResponseAPI(responseJson);
    setCount((state) => state + 1)
  }
  console.log(count)
  console.log(responseAPI)
  
  return (
    <div>
      <h1 className="App-logo">Saudação: {nome} </h1>
    </div>
  );
}

export default Saudacao;
