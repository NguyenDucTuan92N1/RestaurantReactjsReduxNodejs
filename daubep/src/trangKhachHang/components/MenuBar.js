import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GioHang from '../GioHang';
import TrangCaNhan from '../TrangCaNhan';
import TrangKhachHang from '../TrangKhachHang';

function handleClickGioHang (event) {
    window.location = '/GioHang';
}
function handleClickTrangCaNhan (event) {
    window.location = '/TrangCaNhan';
}

export default function MenuBar() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul id="navigation">
                            <li><Link to="/" >Trang chủ</Link></li>
                            <li><Link to="/GioHang" onClick={(event)=>handleClickGioHang(event)}>Giỏ hàng</Link></li>
                            <li><Link to="/TrangCaNhan" onClick={(event)=>handleClickTrangCaNhan(event)}>Trang cá nhân</Link></li>
                        </ul>
                    </nav>
                </div>
            </Router>
        </div>
    )
}

