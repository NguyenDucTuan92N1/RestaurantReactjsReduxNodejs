import React, { Component } from 'react';

class SearchRow extends Component {
    render() {
        return (
            <div>
            <div className="wrap">
              <div className="searchbar">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          
          
        );
    }
}


export default SearchRow;