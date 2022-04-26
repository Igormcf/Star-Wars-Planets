import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';
import { BsCaretLeftSquare, BsCaretRightSquare } from "react-icons/bs";
import audio2 from '../pages/sabre2.mp3';
import '../css/table.css';
import 'animate.css';

function Table() {
  const [current, setCurrent] = useState(0);
  const { dataFilter, filterByName } = useContext(StarContext);
  const { name } = filterByName;
  const length = dataFilter.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  let playSound = () => new Audio(audio2).play();

  return (
    <section className="slider">
      <BsCaretLeftSquare className="left-arrow" onClick={ () => { prevSlide(); playSound() } }/>
      <BsCaretRightSquare className="right-arrow" onClick={ () => { nextSlide(); playSound() } }/>
      {
        dataFilter
        .filter((item) => item.name.toLowerCase().includes(name)).map((item, index) => {
          return (
            <div className="slider-container" key={ index }>
              {index === current && (
                <div className="card fade" key={ item.name }>
                  <span></span>
                  <div className="card__content">
                    <span>Name: { item.name }</span>
                    <span>Rotation Period: { item.rotation_period }</span>
                    <span>orbital Period: { item.orbital_period }</span>
                    <span>Diameter: { item.diameter }</span>
                    <span>Climate: { item.climate }</span>
                    <span>Gravity: { item.gravity }</span>
                    <span>Terrain: { item.terrain }</span>
                    <span>Surface Water: { item.surface_water }</span>
                    <span>Population: { item.population }</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </section>
  );
}

export default Table;
