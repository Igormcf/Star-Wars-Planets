import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StarProvider from './context/StarProvider';
import Planets from './pages/Planets';
import Login from './pages/Login';


function App() {
  document.title = 'Star Wars Planets';
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StarProvider>
        <Routes>
          <Route exact path="/" element={ <Login /> }/>
          <Route exact path="/planets" element={ <Planets /> }/>
        </Routes>
      </StarProvider>
    </BrowserRouter>
  );
}

export default App;
