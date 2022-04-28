import React from 'react';
import Table from '../components/Table';
import Input from '../components/Input';
import Selectors from '../components/Selectors';
import '../css/planets.css';
import darth from '../pages/darth.mp3';

function Planets() {
  return (
    <body>
      <div className='div-stars'></div>
      <audio autoPlay preload='metadata' loop id='playAudio'>
        <source src={ darth } type="audio/mpeg"/>
      </audio>
      <header className='header-planets'>
        <Input />
        <Selectors />
      </header>
      <main>
        <Table />
      </main>
    </body>
  )
}

export default Planets;