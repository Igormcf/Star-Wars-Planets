import React from 'react';
import StarProvider from './context/StarProvider';
import Table from './components/Table';
import Input from './components/Input';
import Selectors from './components/Selectors';

function App() {
  return (
    <StarProvider>
      <Input />
      <Selectors />
      <Table />
    </StarProvider>
  );
}

export default App;
