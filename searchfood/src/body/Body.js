import React, { Component } from 'react';
import SearchBox from './SearchBox';


class Body extends Component {
    render() {
        
        return (
            <div>
              <div className="slider-area slider-height">
          <div className="slider-active">
            <div className="single-slider">
              <div style={{height: '200px', width: '100%'}} />
              
                  <h1 data-animation="fadeInUp" data-delay=".2s" >
                  
                    Search food 
                    {/* &amp; Enjoy the true test */}
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    Hello
                  </p>
                  <div className="slider-btns">
                    <a
                      data-animation="fadeInLeft"
                      data-delay="1.0s"
                      href="#"
                      className="btn hero-btn mr-15"
                    >
                      Our Menu
                    </a>
                   
                  </div>
                </div>
                
              
            
          </div>
        </div>
        
          </div>

        );
    }
}



export default Body;