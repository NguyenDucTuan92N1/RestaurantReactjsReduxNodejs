import React from 'react'
import './App.css';
import './App.scss';
import Header from './header/Header.js'
import Body from './body/Body.js'
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
