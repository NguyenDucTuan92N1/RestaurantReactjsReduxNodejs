import React, { Component } from 'react';
import EditInvoice from './EditInvoice';

class SearchManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:"",
      invoiceObj:{}
    }
  }
  
    //lay thong tin tu Edit Invoice
    getInvoiceEditInfo = (info) => {
      this.setState({
        invoiceObj: info
      })
      this.props.getInvoiceEditInfo(info);
    }

    isShowEditForm = () => {
      if (this.props.editInvoceStatus === true)
        return <EditInvoice
        getInvoiceEditInfo = { (info)=> this.getInvoiceEditInfo(info)}
        invoiceEditObject = {this.props.invoiceEditObject}
        changeEditInvoiceStatus = { () => this.props.changeEditInvoiceStatus()}
        />
    }

    isChange = (event) => {
      console.log(event.target.value)
      this.setState({
          searchValue : event.target.value       
      });
  //    this.props.checkConnectProps(this.state.searchValue)
    }
    render() {
        return (
              <div>
                {this.isShowEditForm()}
                <div className="form-group">
                  <div className="btn-group">
                    <input onChange={(event) => this.isChange(event) }type="text" className="form-control" placeholder="Nhap tu khoa" />
                    <div onClick= {(dl)=>this.props.checkConnectProps(this.state.searchValue) }className="btn btn-info">Tìm</div>
                  </div>
                </div>
                </div>
        
          
        );
    }
}

export default SearchManage;