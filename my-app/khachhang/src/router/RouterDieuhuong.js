import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import SearchFoodBody from '../components/searchfood/SearchFoodBody';
import PaymentBody from '../components/payment/PaymentBody';
import InvoiceGen from '../components/invoicegen/InvoiceGen';
class RouterDieuhuong extends Component {
    render() {
        return (
           
                <div>
                    <Route exact path="/" >

                    </Route>
                    <Route path="/payment">
                        <PaymentBody/>
                    </Route>
                    <Route path="/searchfood" >
                        <SearchFoodBody/>
                    </Route>
                    
                    <Route path="/invoicegen" >
                        <InvoiceGen/>
                    </Route>
                </div>
            
        );
    }
}

export default RouterDieuhuong;