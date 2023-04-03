import React from 'react';

import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Players from './pages/Players'
import EditPlayer from './pages/EditPlayer';
import Sorting from './pages/Sorting';
import Success from './pages/Success';

const App = () => {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="success" element={<Success />} />
          <Route path="players" element={<Players />} />
          <Route path="editplayer/:id" element={<EditPlayer />} />
          <Route path="sorting" element={<Sorting />} />
        </Route>
      </Routes>
  );
}

export default App;
