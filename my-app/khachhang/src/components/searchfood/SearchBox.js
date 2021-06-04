import React, { Component } from 'react';


class SearchBox extends Component {
   
    render() {
        return (
            
               
            <div className="containerSearchButton">
    
        
            <input onChange={this.handleChange} name="fcontent" type="text" placeholder="Search..." />
            <div className="search" />
     
          </div>
  
        
        );
    }
}

export default SearchBox;