import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showTrangCaNhan,
  showGioHang,
  selectShow
} from './features/khachHang/khachHangSlice';
import TrangChu from './TrangChu';
import GioHang from './GioHang';
import TrangCaNhan from './TrangCaNhan';


function ShowMain(){
  const show = useSelector(selectShow);
  const dispatch = useDispatch();
  const [appShow, setAppShow] = useState('0');
  console.log("show: " + show);
// 0: show trang khách hàng
// 1: show trang giỏ hàng
// 2: show trang cá nhân khách hàng
  if(show == 0){
    return <TrangChu></TrangChu>
  }
  else if(show == 1){
    return <GioHang></GioHang>
  }
  else if(show == 2){
    return <TrangCaNhan></TrangCaNhan>
  }
}
export default function TrangKhachHang() {
    return (
        <div>
            <Header></Header>
            {
              ShowMain()
            }
            <Footer></Footer>
        </div>
    )
}
