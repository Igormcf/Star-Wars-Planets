import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Selectors() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    dataFilter,
    setDataFilter,
    columnList,
    setColumnList,
  } = useContext(StarContext);
  const { column, comparison, value } = filterByNumericValues[0];
  const numValue = Number(value);

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
          columnList.map((item, index) => (
            <option key={ index } value={ item }>{item}</option>
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
          setDataFilter(() => tableFilterData());
          setColumnList((prevState) => prevState.filter((item) => item !== column));
        } }
      >
        Filter
      </button>
    </div>
  );
}

export default Selectors;
