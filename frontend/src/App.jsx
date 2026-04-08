import React from 'react';
import { Routes, Route } from 'react-router';
import toast from 'react-hot-toast';

import Home from './pages/Home.jsx';
import Create from './pages/Create.jsx';
import NoteDetail from './pages/NoteDetail.jsx';


const App = () => {
  return (
    <div data-theme="synthwave">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>

    </div>
  )
}

export default App