import React, { Component } from "react";

class Dropdownbutton extends Component {
  render() {
    return (
 
      <div className="dropdown_dropright"style={{textAlign:"center" }}> 
                 <div style={{ height: "0px" }} />
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          Advance Search
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="a">
            Link 1
          </a>
          <a className="dropdown-item" href="a">
            Link 2
          </a>
          <a className="dropdown-item" href="a">
            Link 3
          </a>
        </div>
      </div>
    );
  }
}

export default Dropdownbutton;
