import React from 'react';
import StarProvider from './context/StarProvider';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  return (
    <StarProvider>
      <Input />
      <Table />
    </StarProvider>
  );
}

export default App;
