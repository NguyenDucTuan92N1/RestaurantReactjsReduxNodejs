import React, { Component } from "react";
import SearchRow from "../body/SearchRow.js";
import Cardbox from "../body/Cardbox.js";

import Dropdownbutton from "./Dropdownbutton.js";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
          <div style={{ height: "200px" }} />
          <h1 data-animation="fadeInUp" data-delay=".2s">
            Payment
          </h1>
          <SearchRow />
          <div><Dropdownbutton /></div>
            
        
          <div style={{ height: "100px" }} />

          <Cardbox />

          <div></div>
        </div>
      </div>
    );
  }
}

export default Body;
