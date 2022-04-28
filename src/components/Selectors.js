import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import '../css/selectors.css';
import audio from '../pages/sabre.mp3';
import { GiDeathStar } from 'react-icons/gi';

function Selectors() {
  const {
    data,
    filterByNumericValues,
    setFilterByNumericValues,
    dataFilter,
    setDataFilter,
    columnList,
    setColumnList,
    newFilterValues,
    setNewFilterValues,
    dataAssistant,
    setDataAssistant,
  } = useContext(StarContext);
  const { column, comparison, value } = filterByNumericValues[0];
  const numValue = Number(value);
  const newArray = ['population', 'diameter',
    'rotation_period', 'orbital_period', 'surface_water'];

  const tableFilterData = () => dataFilter.filter((item) => {
    if (numValue || numValue === 0) {
      if (comparison.includes('maior que')) {
        return (Number(item[column]) > numValue);
      }
      if (comparison.includes('menor que')) {
        return Number(item[column]) < numValue;
      }
      return Number(item[column]) === numValue;
    }
    return item;
  });

  function deleteFilter(paramFilter) {
    const listFilter = newFilterValues.filter((item) => item.column !== paramFilter);
    setNewFilterValues(listFilter);
    setColumnList([...columnList, paramFilter]);
    if (newFilterValues.length === 1) {
      setDataFilter(data);
    }
    if (newFilterValues.length > 1) {
      setDataFilter(dataAssistant);
    }
  }

  function deleteAllFilters() {
    setNewFilterValues([]);
    setColumnList(newArray);
    if (newFilterValues.length > 0) {
      setDataFilter(data);
    }
  }

  let playSound = () => new Audio(audio).play();

  return (
    <div className="conatiner-body-selectors">
      <div className="selectors-container">
        <div className="select">
          <select
            data-testid="column-filter"
            onChange={ (e) => setFilterByNumericValues([{
              ...filterByNumericValues[0],
              column: e.target.value,
            }]) }
            name="column"
          >
            {
              columnList.map((item) => (
                <option key={ item } value={ item }>{ item }</option>
              ))
            }
          </select>
        </div>
        <div className="select">
          <select
            data-testid="comparison-filter"
            onChange={ (e) => setFilterByNumericValues([{
              ...filterByNumericValues[0],
              comparison: e.target.value,
            }]) }
            name="comparision"
          >
            <option value="maior que">
              maior que
            </option>
            <option value="menor que">
              menor que
            </option>
            <option value="igual a">
              igual a
            </option>
          </select>
        </div>
        <input
          className="number-wrapper"
          value={ value }
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setFilterByNumericValues([{
            ...filterByNumericValues[0],
            value: e.target.value,
          }]) }
          name="value"
        />
        <button
          className="button-selectors"
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            playSound();
            setColumnList((prevState) => prevState.filter((item) => item !== column));
            setNewFilterValues((prevState) => [...prevState, filterByNumericValues[0]]);
            setDataFilter(() => tableFilterData());
            setDataAssistant(dataFilter);
          } }
        >
          Filter
        </button>
        <button
          className="button-selectors btnRemove"
          data-testid="button-remove-filters"
          type="button"
          onClick={ () => { playSound(); deleteAllFilters() } }
        >
          Remover filtros
        </button>
      </div>
      {
        newFilterValues.length > 0
        && (
          <div className="container-filters">
            {
              newFilterValues.map((item) => (
                <div key={ item.column } className="filter-div">
                  <span data-testid="filter" >
                    { item.column }
                  </span>
                  <button
                    type="button"
                    onClick={ () => deleteFilter(item.column) }
                  >
                    <GiDeathStar className="img-delete"/>
                  </button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default Selectors;
