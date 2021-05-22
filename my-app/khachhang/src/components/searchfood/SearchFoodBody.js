import React, { Component } from "react";
import SearchRow from "./SearchRow.js";
import Cardbox from "./Cardbox.js";

import Dropdownbutton from "./Dropdownbutton.js";

class SearchFoodBody extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
          <div style={{ height: "200px" }} />
          <h1 style={{textAlign:"center" }}>
            Search food
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

export default SearchFoodBody;
