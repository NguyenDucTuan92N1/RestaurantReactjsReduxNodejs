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
import EditInvoice from './components/paymentmanage/EditInvoice';

//const uuidv1 = require('uuid/v1');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: DataManage,
			searchText:"",
			editInvoceStatus: false,
			invoiceEditObject:{}
		}
	}

	//xoa
	deleteInvoice = (idUser)=> {
		console.log(idUser)
		var tempData = this.state.data.filter(item=> item.id !== idUser);

		this.setState ({
			data : tempData
		})
	}


	getInvoiceEditInfo = (info) => {
		
		console.log("thong tin da sua"+info.name)
		console.log("thong tin da sua"+info.totalAmount)
		this.state.data.forEach( ( value, key )=> {
			if (value.id === info.id){
				value.name = info.name;
				value.invoiceCode = info.invoiceCode;
				value.date = info.date;
				value.totalAmount = info.totalAmount;
			}
		})
	}

	changeEditInvoiceStatus = () => {
		this.setState({
			editInvoceStatus: !this.state.editInvoceStatus
		})
	}

	editInvoice = (invoiceNo) => {

		this.setState({
			invoiceEditObject:invoiceNo
		})

	}

	getNewInvoiceData = (invoiceCode, name, date, totalAmount) => {

		var item = {};
		item.id = "";
		item.invoiceCode = invoiceCode
		item.name = name
		item.date = date
		item.totalAmount = totalAmount

		var itemApp = this.state.data
		itemApp.push(item)
		//	console.log(this.state.data)
	}


	getTextSearch = (dl) => {

		this.setState({
			searchText: dl
		})
	//	console.log('Bo nhan duoc du lieu' + this.state.searchText);
	}

	render() {
		var ketqua = [];
		this.state.data.forEach((item) => {
			if (item.name.indexOf(this.state.searchText) !== -1) {
				ketqua.push(item);
			}
		})
		//console.log(ketqua)
		return (
			<div>
				<Header1></Header1>
				<div className="searchForm">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<SearchManage
									// lay du lieu tu con len 
									getInvoiceEditInfo = { (info)=> this.getInvoiceEditInfo(info)}
								//	invoiceEditObject = {this.state.invoiceEditObject}
									checkConnectProps={(dl) => this.getTextSearch(dl)}
									editInvoceStatus={this.state.editInvoceStatus}
									invoiceEditObject={this.state.invoiceEditObject}
									changeEditInvoiceStatus = { () => this.changeEditInvoiceStatus()}
								></SearchManage>
								<hr></hr>
							</div>
							<div className="col-9">
								<TableData 
								deleteInvoice = {(idUser) => this.deleteInvoice(idUser)}
								changeEditInvoiceStatus = { () => this.changeEditInvoiceStatus()}
								data={ketqua} editFun={(invoiceNo) => this.editInvoice(invoiceNo)} />
							</div>
							<div className="col-3">

								<AddNewInvoice add={(invoiceCode, name, date, totalAmount) => this.getNewInvoiceData(invoiceCode, name, date, totalAmount)} />


							</div>

					
						</div>
					</div>
				</div>

				
			</div>
		);
	}
}

export default App;

