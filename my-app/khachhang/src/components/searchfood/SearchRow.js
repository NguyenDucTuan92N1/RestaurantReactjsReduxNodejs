import React, { Component } from 'react';
import { Redirect } from 'react-router';

class SearchRow extends Component {
    constructor(props) {
      super(props);
		this.state = {
			isRedirect: false,
	  		fcontent: "" 
		}
    }

	submitForm = (event) => {
		event.preventDefault()
		this.setState({
			isRedirect:true
		})
	}
    
    isChange = (event) => {
      const ten = event.target.name
      const giatri = event.target.value
      console.log(ten)
      console.log(giatri)
	  this.setState({
		[ten]: giatri
	  });
    }

	getGiaTri = () => {
		var noiDung = "";
		noiDung += "Ten nhan duoc" + this.state.fcontent
		return noiDung
	}


    render() {
		if (this.state.isRedirect === true) {
			return <Redirect to='/' />
		}
		console.log(this.state)
        return (
          <div>
            <center>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          {/* The form */}
          <form className="example" action="action_page.php">
            <input name="fcontent" onChange={(event) => this.isChange(event)} type="text" placeholder="Search.."  />
            <button onClick={ (event) => this.submitForm(event)} type="submit"><i className="fa fa-search" /></button>
          </form>
          </center>
        </div>
        
        
          
        );
    }
}


export default SearchRow;