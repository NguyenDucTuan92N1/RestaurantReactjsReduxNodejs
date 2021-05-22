import React, { Component } from 'react';

class Totalcal extends Component {
  render() {
    return (
     <div>
       <div class="tableNumber">
        <table class="table">
          <thead>
            <tr>
              <th>Đơn hàng số</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td > 1</td>
            </tr>
          </tbody>
        </table>
      </div>
  

        <div className="divtable">
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tên món ăn</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Đơn giá</th>
            <th scope="col">Thành tiền</th>
          </tr></thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        <thead>
        
        <td> </td>
        <td> Tổng cộng:</td>
        <td> </td>
        <td> </td>
        <td> 2999 đồng</td>
        </thead>
        <thead>
        
        <td> </td>
        <td> Số tiền bằng chữ:</td>
        <td colspan="2"> </td>
        <td>11
        </td>
        </thead>

      </table>
    </div>

     </div>
    );
  }
}

export default Totalcal;