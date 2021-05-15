import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
  <div className="header-area header-transparent">
    <div className="main-header header-sticky">
      <div className="container-fluid">
        <div className="menu-wrapper d-flex align-items-center justify-content-between">
          <div className="left-content d-flex align-items-center">
            <div className="logo">
              <a href="index-2.html"><img src="assets/img/logo/logo.png" alt="" /></a>
            </div>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul id="navigation">
                  <li><a href="index-2.html">Home</a></li>
                  <li><a href="menu.html">Menu</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Blog</a>
                    <ul className="submenu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog_details.html">Blog Details</a></li>
                      <li><a href="elements.html">Element</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="buttons">
            <ul>
              <li className="button-header">
                <a href="#" className="header-btn mr-30">Book a Table</a>
                <a href="#" className="btn header-btn2"> <i className="fas fa-phone-alt" />+10 (78) 783 3674</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="mobile_menu d-block d-lg-none" />
        </div>
      </div>
    </div>
  </div>
</header>

            </div>
        );
    }
}

export default Header;