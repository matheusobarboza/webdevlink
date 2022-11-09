import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Router } from './App';
import './styles/globals.css';

// import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <Router />
  </React.StrictMode>
);