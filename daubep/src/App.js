import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showMenu,
  showOrder,
  selectShow
} from './trangDauBep/features/cook/cookSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TrangDauBep from './trangDauBep/TrangDauBep';
import TrangKhachHang from './trangKhachHang/TrangKhachHang';
import GioHang from './trangKhachHang/GioHang';
import TrangCaNhan from './trangKhachHang/TrangCaNhan';
import RouterDieuhuong from './router/RouterDieuhuong';
import InvoiceGen from './trangKhachHang/components/invoicegen/InvoiceGen';
import SearchFoodBody from './trangKhachHang/components/searchfood/SearchFoodBody';
import PaymentBody from './trangKhachHang/components/payment/PaymentBody';


export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/TrangKhachHang">
            <TrangKhachHang></TrangKhachHang>
          </Route>
          <Route path="/QuanLy">
            <QuanLy />
          </Route>
          <Route path="/TrangDauBep">
            <TrangDauBep></TrangDauBep>
          </Route>
          <Route path="/GioHang">
            <GioHang></GioHang>
          </Route>
          <Route path="/TrangCaNhan">
            <TrangCaNhan></TrangCaNhan>
          </Route>
          <Route path="/payment">
            <PaymentBody></PaymentBody>
          </Route>
          <Route path="/searchfood" >
            <SearchFoodBody></SearchFoodBody>
          </Route>
          <Route path="/invoicegen" >
            <InvoiceGen></InvoiceGen>
          </Route>
          <Route path="/">
            <TrangKhachHang></TrangKhachHang>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function KhachHang() {
  return <h2>Khách Hàng</h2>;
}



function QuanLy() {
  return <h2>QuanLy</h2>;
}

