import React from 'react'
import './App.css';
import './App.scss';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';
import RouterDieuhuong from './router/RouterDieuhuong';
import {
  BrowserRouter as Router,
} from "react-router-dom";




function App() {
  return (
    <Router>
      
          <Header/>
          <RouterDieuhuong/>
          <Footer/>
      
    </Router>
  );
}

export default App;
