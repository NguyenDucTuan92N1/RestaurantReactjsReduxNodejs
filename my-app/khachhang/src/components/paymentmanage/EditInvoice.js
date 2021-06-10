import React, { Component } from 'react';

class EditInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.invoiceEditObject.id,
            invoiceCode: this.props.invoiceEditObject.invoiceCode,
            name: this.props.invoiceEditObject.name,
            date: this.props.invoiceEditObject.date,
            totalAmount: this.props.invoiceEditObject.totalAmount
        }
    }

    saveButton=  () => {
        var info={};
        info.id = this.state.id;
        info.invoiceCode = this.state.invoiceCode;
        info.name = this.state.name;
        info.date = this.state.date;
        info.totalAmount = this.state.totalAmount;
        this.props.getInvoiceEditInfo(info)
        this.props.changeEditInvoiceStatus()
    }
    
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
  //      console.log(name)
     //   console.log(value)
    }
    render() {
        return (
       
            <div className="col-12">
            <div className="card text-white bg-warning mb-3 mt-2">

                <div className="card-header"> Sửa </div>
                <div className="card-body text primary">
                    <h5 className="card-title" />
                 
                        <div className="form-group">
                            

                        <label htmlFor>Id</label>
                            <input
                                defaultValue={this.props.invoiceEditObject.id} 
                                name="id" 
                                onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="1" />


                            <label htmlFor>Mã Invoice</label>
                            <input
                                defaultValue={this.props.invoiceEditObject.invoiceCode} 
                                name="invoiceCode" 
                                onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="0001" />
                            <label htmlFor>Tên</label>
                            <input
                                defaultValue={this.props.invoiceEditObject.name}  
                                type="text" name="name" 
                                onChange={(event) => this.isChange(event)} className="form-control" placeholder="Anh" />
                            <label htmlFor>Ngày tạo</label>
                            <input 
                                defaultValue={this.props.invoiceEditObject.date}  
                                type="date" name="date" 
                                onChange={(event) => this.isChange(event)} className="form-control" placeholder="01/01/2021" />
                            <label htmlFor>Tổng số tiền</label>
                            <input
                                 defaultValue={this.props.invoiceEditObject.totalAmount}  
                                type="text" name="totalAmount" 
                                onChange={(event) => this.isChange(event)} className="form-control" placeholder="0000" />
                            .<div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={() => this.saveButton()}
                                    value="Sửa" />
           `    
                                </div>
                                
                        </div>
                        
                </div>

            </div>
            </div>

  
     
        );
    }
}

export default EditInvoice;