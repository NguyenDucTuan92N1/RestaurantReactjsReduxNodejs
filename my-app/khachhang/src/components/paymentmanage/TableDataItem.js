import React, { Component } from 'react';

class TableDataItem extends Component {

    //xoa
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    //edit
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditInvoiceStatus();
    }

    render() {
     
       
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td>{this.props.invoiceCode}</td>
                
                <td>{this.props.date}</td>
                <td>{this.props.name}</td>
                <td>{this.props.totalAmount}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={ () => this.editClick() } className="btn btn-warning sua"> <i className="fa fa-edit">
                            Sua
              </i>
                        </div>
                        <div
                            
                            className="btn btn-danger xoa"
                            
                            onClick = {(idUser)=>this.deleteButtonClick(this.props.id)} 
                            > 
                            
                            <i className="fa fa-delete">
                            Xoa
              </i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataItem;