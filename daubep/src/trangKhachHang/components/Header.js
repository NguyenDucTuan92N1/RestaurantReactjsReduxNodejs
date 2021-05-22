// import React, { Component } from 'react';
import MenuBar from './MenuBar';
import React, { Component, useState } from 'react';
// import ShoppingCart from '../components/shoppingCart/ShoppingCart';
// import Popup from './popup/Popup';
function Header () {
    
        return (
        
                <header>
                {/* {
                    isPopup && <Popup setIsPopup={setIsPopup}/>
                } */}
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="left-content d-flex align-items-center">
                                    <div className="logo">
                                        <a href="index-2.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        {/* <nav>
                                            <ul id="navigation">
                                                <li><a href="#">Trang chủ</a></li>
                                                <li><a href="#">Giỏ hàng</a></li>
                                                <li><a href="#">Trang cá nhân</a></li>
                                            </ul>
                                        </nav> */}
                                        <MenuBar></MenuBar>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <ul>
                                        <li className="button-header">
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
           
        );
    }


export default Header;