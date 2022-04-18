import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <StarContext.Provider value={ { data } }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
