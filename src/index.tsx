import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './App';
import './styles/globals.css';

import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);