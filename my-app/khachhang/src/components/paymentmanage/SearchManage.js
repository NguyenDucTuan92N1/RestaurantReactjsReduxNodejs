import React, { Component } from 'react';

class SearchManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:""
    }
  }
  

    isChange = (event) => {
      console.log(event.target.value)
      this.setState({
          searchValue : event.target.value       
      });
     this.props.checkConnectProps(this.state.searchValue)
    }
    render() {
        return (
    

                <div className="form-group">
                  <div className="btn-group">
                    <input onChange={(event) => this.isChange(event) }type="text" className="form-control" placeholder="Nhap tu khoa" />
                    <div onClick= {(dl)=>this.props.checkConnectProps(this.state.searchValue) }className="btn btn-info">Tìm</div>
                  </div>
                </div>
      
        
          
        );
    }
}

export default SearchManage;