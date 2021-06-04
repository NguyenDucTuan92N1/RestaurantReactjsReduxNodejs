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
function App() {

	return (
		// <Router>
		//       <Header/>
		//       <RouterDieuhuong/>
		//       <Footer/>
		// </Router>
		<div>
			<Header1></Header1>
			<div className="searchForm">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<SearchManage></SearchManage>
							<hr></hr>
						</div>
						<div className="col-9">
								<TableData />
								</div>
						<div className="col-3">
								<AddNewInvoice />
								</div>
						
					</div>
				</div>
			</div>
		</div>


	);
}

export default App;
