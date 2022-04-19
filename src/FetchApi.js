/* import { useContext } from 'react';
import StarContext from './context/StarContext';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const { setData } = useContext(StarContext);

const getPlanets = async () => {
  const response = await fetch(url);
  const { results } = await response.json();
  setData(results);
};

export default getPlanets;
 */