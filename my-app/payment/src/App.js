import React from 'react'
import './App.css';
import './App.scss';
import Header from './header/Header.js'
import Body from './body/Body.js'
import Footer from './footer/Footer';
import InvoiceGen from './invoicegen/InvoiceGen';
import { Router } from 'react-router';


function App() {
  return (
    <div className="App">
        <Header/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;
