import React, { Component } from 'react';

class AddNewInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            invoiceCode: "",
            name: "",
            date: "",
            totalAmount: ""
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value)
        this.setState({
            [name]: value
        })
        //package to item
        // var item={};
        // item.id = this.state.id;
        // item.invoiceCode = this.state.invoiceCode;
        // item.name = this.state.name;
        // item.date = this.state.date;
        // item.totalAmount = this.state.totalAmount;

    }

    render() {
        // console.log(this.state)
        return (
<form>
            <div className="card text-left">

                <div className="card-header"> Thêm mới </div>
                <div className="card-body text primary">
                    <h5 className="card-title" />
                 
                        <div className="form-group">
              
                            <label htmlFor>Mã Invoice</label>
                            <input name="invoiceCode" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="0001" />
                            <label htmlFor>Tên</label>
                            <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Anh" />
                            <label htmlFor>Ngày tạo</label>
                            <input type="date" name="date" onChange={(event) => this.isChange(event)} className="form-control" placeholder="01/01/2021" />
                            <label htmlFor>Tổng số tiền</label>
                            <input type="text" name="totalAmount" onChange={(event) => this.isChange(event)} className="form-control" placeholder="0000" />
                            .<div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(invoiceCode, name, date, totalAmount) => this.props.add(this.state.invoiceCode, this.state.name, this.state.date, this.state.totalAmount)}
                                    value="Thêm mới" />
           `    
                                </div>
                                
                        </div>
                        
                </div>

            </div>

            </form>
        );
    }
}

export default AddNewInvoice;