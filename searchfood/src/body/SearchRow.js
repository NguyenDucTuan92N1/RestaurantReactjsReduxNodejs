import React, { Component } from 'react';

class SearchRow extends Component {
    render() {
        return (
          <div>
            <center>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          {/* The form */}
          <form className="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search" /></button>
          </form>
          </center>
        </div>
        
        
          
        );
    }
}


export default SearchRow;