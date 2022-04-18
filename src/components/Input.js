import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Input() {
  const { setfilterByName } = useContext(StarContext);

  return (
    <section>
      <input
        data-testid="name-filter"
        onChange={ (e) => setfilterByName({ name: e.target.value }) }
        type="text"
      />
    </section>
  );
}

export default Input;
