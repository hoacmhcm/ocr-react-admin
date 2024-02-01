import React from 'react';

import { Route, Routes } from 'react-router-dom';

import LayoutApp from './ui/shared/layout/LayoutApp';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LayoutApp />} />
    </Routes>
  );
}

export default App;
