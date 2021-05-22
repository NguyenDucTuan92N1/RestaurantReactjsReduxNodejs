import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import SearchFoodBody from '../trangKhachHang/components/searchfood/SearchFoodBody';
import PaymentBody from '../trangKhachHang/components/payment/PaymentBody';
import InvoiceGen from '../trangKhachHang/components/invoicegen/InvoiceGen';
class RouterDieuhuong extends Component {
    render() {
        return (
           
                <div>
                    <Route exact path="/" >

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
                </div>
            
        );
    }
}

export default RouterDieuhuong;