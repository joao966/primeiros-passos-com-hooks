import React, {useContext, useEffect} from 'react';

import contextSauder from '../context/contex.js';

function Saudacao() {
  const {nome, fetchAPI, responseAPI, handleChangePlanet, filters: {filterByName: {name}} } = useContext(contextSauder);

  useEffect(() => {
    fetchAPI();
    console.log('chamou useEfectt de saudação')
  },[])
  
  return (
    <div className="cor">
      <h1 className="App-logo">Saudação: {nome} </h1>
      <input onChange={handleChangePlanet} />
      <table>
        <thead>
          <tr>
            <th>Planetas</th>
            <th>População</th>
            <th>Gravidade</th>
            <th>Rotação</th>
          </tr>
        </thead>
        <tbody>
          {responseAPI.filter((filter) => filter.name.includes(name) )
          .map((planet, index) => (
            <tr key={index}>
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>{planet.gravity}</td>
              <td>{planet.rotation_period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Saudacao;
