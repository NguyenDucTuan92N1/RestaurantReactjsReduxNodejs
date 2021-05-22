import React, { Component } from 'react';


class SearchBox extends Component {
    render() {
        return (
            <div>
            <div className="containerSearchButton">
            <input type="text" placeholder="Search..." />
            <div className="search" />
          </div>
          </div>
        );
    }
}

export default SearchBox;