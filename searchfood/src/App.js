import React, {Component} from 'react'
import Searchfood from './searchfood/Searchfood'
import Header from './header/Header'
import './App.css';
import Footer from './footer/Footer';
import Body from './body/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Searchfood/> */}
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
