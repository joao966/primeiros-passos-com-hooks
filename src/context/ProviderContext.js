import React, {useEffect, useState} from 'react';
import context from '../context/contex';


function Provider({children}) {
  const [Planet, setInput] = useState('');
  const [responseAPI, setResponseAPI] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    number: 0,
    column: 'population',
    comparison: 'maior que',
  });

  useEffect(() => {
    fetchAPI();
  }, [])
  
  const fetchAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setResponseAPI(responseJson.results);
  }
  console.log(responseAPI)

  const handleChangePlanet = (event) => {
    setInput(event.target.value)
  }
  console.log(`planet aqui${Planet}`)

  const changefilteredByNumber = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleButtonFilterClick = () => {
    const { number, column, comparison } = filters;

    const filteredData = responseAPI.filter((planet) => {
      if (comparison === 'maior que') {
        return parseInt(planet[column], 10) > parseInt(number, 10);
      }

      if (comparison === 'menor que') {
        return parseInt(planet[column], 10) < parseInt(number, 10);
      }

      return parseInt(planet[column], 10) === parseInt(number, 10);
    });
    setResponseAPI(filteredData);
  };
  
  const GLOBAL_STATE = {
    fetchAPI,
    responseAPI,
    handleChangePlanet,
    changefilteredByNumber,
    handleButtonFilterClick,
    filters: {
      filterByName: {
        name: Planet,
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        }
      ]
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
