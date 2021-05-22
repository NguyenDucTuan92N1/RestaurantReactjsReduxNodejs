import React from 'react';

import { Counter } from './features/counter/Counter';
// import Header from './components/Header';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
