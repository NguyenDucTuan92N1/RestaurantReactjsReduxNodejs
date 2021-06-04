import React, { Component } from "react";
import CardItem from "./CardItem";
import dl from  '../data.json'
class Cardbox extends Component {

  
  render() {
    console.log(this.props)
    return (
      <div class="row">
        {
          dl.map((value,key)=> (
            <CardItem key={key}
                      id={value.id}
                      picture={value.picture}
                      price = {value.price}
                      description = {value.description}
                      name = {value.name}

            />
          ))
        }
      </div>
    );
  }
}

export default Cardbox;
