import React, { Component } from 'react';
import dl from '../data.json'
class FoodDetail extends Component {
    render() {
        console.log(this.props.match.params.id)
        console.log(typeof(this.props.match.params.id))

       

        return (
            <div>
                Details mon an

                {
                     dl.map((value,key) => {
                        if (value.id === parseInt(this.props.match.params.id)){
                            return (
                                <div className="jumbotron jumbotron-fluid">
                                    <div className = "container">
                                        <img src = {value.picture} className="img-fluid" alt="react rounter demo"/>
                                        <h1>{value.name}</h1>
                                        <hr className="my-2"/>
                                        <p></p>
                                    </div>
                                </div>
                            )
                        }
                        return 1;
                    })
                }

            </div>
        );
    }
}

export default FoodDetail;