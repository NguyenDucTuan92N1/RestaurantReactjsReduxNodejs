import React from 'react'
import './App.css';
import './App.scss';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';
import RouterDieuhuong from './router/RouterDieuhuong';
import {
	BrowserRouter as Router,
} from "react-router-dom";
import Header1 from './components/paymentmanage/Header1';
import SearchManage from './components/paymentmanage/SearchManage';
import TableData from './components/paymentmanage/TableData';
import AddNewInvoice from './components/paymentmanage/AddNewInvoice';

import DataManage from './components/paymentmanage/DataManage.json'

import { Component } from 'react';

const uuidv1 = require('uuid/v1');

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			data : DataManage
		}
	}

	getNewInvoiceData = (invoiceCode, name, date, totalAmount)=> {
		
		var item = {};
		item.id = uuidv1;
		item.invoiceCode = invoiceCode
		item.name = name
		item.date = date
		item.totalAmount = totalAmount
		
		var itemApp = this.state.data
		itemApp.push(item)
		console.log(this.state.data)
	}

	
	getTextSearch = ( dl ) => {
		
		this.setState( {
			searchText: dl
		})
		console.log('Bo nhan duoc du lieu' + this.state.searchText);
	}

	render() {
		var ketqua= [];
        this.state.data.forEach( (item) => {
			if (item.name.indexOf(this.state.searchText) !== -1){
				ketqua.push(item);
			}
		})
		console.log(ketqua)
		return (
			<div>
			<Header1></Header1>
			<div className="searchForm">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<SearchManage
							// lay du lieu tu con len 
								checkConnectProps = { (dl) => this.getTextSearch(dl)}
							
							></SearchManage>
							<hr></hr>
						</div>
						<div className="col-9">
								<TableData data={ketqua}/>
								</div>
						<div className="col-3">
								<AddNewInvoice add={ (invoiceCode, name, date, totalAmount) => this.getNewInvoiceData(invoiceCode, name, date, totalAmount)}/>
								</div>
						
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default App;

