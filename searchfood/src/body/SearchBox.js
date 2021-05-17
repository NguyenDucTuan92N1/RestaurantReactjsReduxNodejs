import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="container">
            <input type="text" placeholder="Search..." />
            <div className="search" />
          </div>
        );
    }
}

export default SearchBox;