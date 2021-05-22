import React, { Component } from "react";

import InHoaDon from "./InHoaDon.js";
import QRcode from "./QRcode.js";
import Totalcal from "./Totalcal.js";




class Body extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
          <div style={{ height: "200px" }} />
          <h1 data-animation="fadeInUp" data-delay=".2s">
            Payment
          </h1>
                  
          <div style={{ height: "100px" }} />
          
          <Totalcal/>          
          <h2> Quý khách vui lòng quét mã để thanh toán</h2>
          <QRcode/>

          <div></div>
          <div>
            <InHoaDon/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Body;
