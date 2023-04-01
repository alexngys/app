import React from 'react';

import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Players from './pages/Players'

const App = () => {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="players" element={<Players />} />
          
        </Route>
      </Routes>
  );
}

export default App;
