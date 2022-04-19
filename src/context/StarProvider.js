import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: 0,
  }]);
  const [dataFilter, setDataFilter] = useState([]);
  const array = ['population', 'diameter',
    'rotation_period', 'orbital_period', 'surface_water'];
  const [columnList, setColumnList] = useState(array);

  /* const editeColumns = (param) => {
    const editedColumns = array.filter((item) => item !== param);
    setColumnList(editedColumns);
  }; */

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setDataFilter(results);
      setData(results);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    filterByName,
    setfilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    dataFilter,
    setDataFilter,
    setColumnList,
    columnList,
  };

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
