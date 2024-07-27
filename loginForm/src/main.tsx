import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../src/components/login/Login'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<App />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);