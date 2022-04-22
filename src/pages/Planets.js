import React from 'react';
import Table from '../components/Table';
import Input from '../components/Input';
import Selectors from '../components/Selectors';

function Planets() {
  return (
    <div>
      <header>
        <Input />
        <Selectors />
      </header>
      <main>
        <Table />
      </main>
    </div>
  )
}

export default Planets;