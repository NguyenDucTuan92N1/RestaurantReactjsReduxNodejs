import React, {Component} from 'react'
import Searchfood from './searchfood/Searchfood'
import Header from './header/Header'
import './App.css';
import Footer from './footer/Footer';
import Body from './body/Body';

function App() {
  return (
    <div className="App">
      <h1>Bat dau</h1>
      <Header/>
      <Searchfood/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
