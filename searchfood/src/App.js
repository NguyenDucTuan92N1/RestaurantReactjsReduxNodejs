import React, {Component} from 'react'
import Searchfood from './searchfood/Searchfood'
import Header from './header/Header'
import './App.css';
import Footer from './footer/Footer';
import Body from './body/Body';
import SearchBox from './body/SearchBox';
import './App.scss';
import SearchRow from './body/SearchRow';

function App() {
  return (
    <div className="App">
      {/* <Header/>  */}
      {/* <Searchfood/> */}
      {/* <Body/> */}
      <SearchRow/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
