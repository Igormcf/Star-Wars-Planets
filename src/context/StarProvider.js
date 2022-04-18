import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setfilterByName] = useState({ name: '' });
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    filterByName,
    setfilterByName,
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
