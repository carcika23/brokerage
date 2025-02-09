import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar';
import Helper from './components/helper/helper';
import './components/i18n'; // Import i18n configuration

function App() {
  return (
    <React.StrictMode>
      <Navbar/>
      <Helper/>
    </React.StrictMode>
  );
}

export default App;
