import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="left-content d-flex align-items-center">
                                    <div className="logo">
                                        <a href="#"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="/">Trang chủ</a></li>
                                                <li><a href="/GioHang">Giỏ hàng</a></li>
                                                <li><a href="/DonHang">Đơn hàng</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <ul>
                                        <li className="button-header">
                                            <a href="#" className="btn header-btn2"> <i className="fas fa-phone-alt" />(+84) 0123456789</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
