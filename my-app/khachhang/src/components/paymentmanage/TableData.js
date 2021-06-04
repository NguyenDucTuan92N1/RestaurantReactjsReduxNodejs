import React, { Component } from 'react';
import TableDataItem from './TableDataItem';

class TableData extends Component {

    mappingData = () => 
        this.props.data.map( (value, key) =>(
            <TableDataItem  key = {key} 
                            id = {value.id}
                            invoiceCode = {value.invoiceCode}
                            name = {value.name}
                            date = {value.date}
                            totalAmount = {value.totalAmount}
            />
         ) )
    

    render() {
  
        return (
      
                 
                            <table className="table table-striped table-inverse table-hover">
                                <thead className="thead-inverse">
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã Invoice</th>
                                        <th>Ngày tạo</th>
                                        <th>Tên</th>
                                        <th>Tổng số tiền </th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.mappingData()}
                                    
                                </tbody>
                            </table>
                      
        );
    }
}

export default TableData;