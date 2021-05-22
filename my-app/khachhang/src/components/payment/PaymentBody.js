import React, { Component } from "react";

import InHoaDon from "./InHoaDon";
import QRcode from "./QRcode.js";
import Totalcal from "./Totalcal.js";




class Body extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
          <div style={{ height: "200px"}} />
          
          <h1 style={{textAlign:"center" }}>  Payment </h1>
           
                  
          <div style={{ height: "100px" }} />
          
          <Totalcal/>          
          <h2 style={{textAlign:"center" }}> Quý khách vui lòng quét mã để thanh toán</h2>
          <QRcode />

          <div></div>
          <div style={{textAlign:"center" }}>
            <InHoaDon/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Body;
