import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

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

  return (
    <div>
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
      <input
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
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setColumnList((prevState) => prevState.filter((item) => item !== column));
          setNewFilterValues((prevState) => [...prevState, filterByNumericValues[0]]);
          setDataFilter(() => tableFilterData());
          setDataAssistant(dataFilter);
        } }
      >
        Filter
      </button>
      {
        newFilterValues.length > 0
        && (
          <ul>
            {
              newFilterValues.map((item) => (
                <li data-testid="filter" key={ item.column }>
                  { item.column }
                  <button
                    type="button"
                    onClick={ () => deleteFilter(item.column) }
                  >
                    X
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => deleteAllFilters() }
      >
        Remover todos os filtros
      </button>
    </div>
  );
}

export default Selectors;
