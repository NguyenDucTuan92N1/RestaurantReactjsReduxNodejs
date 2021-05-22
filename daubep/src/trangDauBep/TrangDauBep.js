import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Order from './components/Order';


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showMenu,
  showOrder,
  selectShow
} from './features/cook/cookSlice';

import './css/index.css';
function ShowMainOrder(){
  const show = useSelector(selectShow);
  const dispatch = useDispatch();
  const [appShow, setAppShow] = useState('0');
  console.log("show: " + show);
  if(show == 1){
    return <Main></Main>
  }
  else{
    return <Order></Order>
  }
}
export default function TrangDauBep() {
    return (
        <div>
            <Header></Header>
            {
                ShowMainOrder()
            }
            <Footer></Footer>
        </div>
    )
}
