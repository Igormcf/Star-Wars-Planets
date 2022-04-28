import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import '../css/input.css'
import audio from '../pages/sabre2.mp3';

function Input() {
  const { setfilterByName } = useContext(StarContext);

  let playSound = () => new Audio(audio).play();

  return (
    <section className="section-form">
      <div className="group">
        <input
          required
          id="search"
          className="input-search"
          data-testid="name-filter"
          onChange={ (e) => setfilterByName({ name: e.target.value }) }
          onClick={ playSound }
          type="text"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="search" className="label-search" >
          Search Planet
        </label>
      </div>
    </section>
  );
}

export default Input;
