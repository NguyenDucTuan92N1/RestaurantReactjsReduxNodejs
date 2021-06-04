import React, { Component } from 'react';
import {
    Route,  
} from "react-router-dom";
import SearchFoodBody from '../components/searchfood/SearchFoodBody';
import PaymentBody from '../components/payment/PaymentBody';
import InvoiceGen from '../components/invoicegen/InvoiceGen';
import FoodDetail from '../components/fooddetail/FoodDetail';
class RouterDieuhuong extends Component {
    render() {
        return (
           
                <div>
                    <Route exact path="/" >

                    </Route>
                    <Route path="/payment" component={PaymentBody}>

                    </Route>
                    <Route path="/searchfood" component={SearchFoodBody}>
                
                    </Route>

                    <Route path="/food-detail/:slug.:id.html" component={FoodDetail}>
                        
                    </Route>
                    
                    <Route path="/invoicegen" component={InvoiceGen}>
                     
                    </Route>
                </div>
            
        );
    }
}

export default RouterDieuhuong;