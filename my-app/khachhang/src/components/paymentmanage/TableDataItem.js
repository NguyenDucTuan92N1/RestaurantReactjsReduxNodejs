import React, { Component } from 'react';

class TableDataItem extends Component {
    
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
                        <div className="btn btn-warning sua"> <i className="fa fa-edit">
                            Sua
              </i>
                        </div>
                        <div className="btn btn-danger xoa"> <i className="fa fa-delete">
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