import React from 'react';
import Table from '../components/Table';
import Input from '../components/Input';
import Selectors from '../components/Selectors';
import '../css/planets.css';

function Planets() {
  return (
    <body>
      <div className='div-stars'></div>
      <header>
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