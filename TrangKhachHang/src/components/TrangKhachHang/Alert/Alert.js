import React, { Component } from 'react'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export function handleCLickXoaSPGioHang() {
    store.addNotification({
        title: "Thành công!",
        message: "Bạn đã xóa món ăn khỏi giỏ hàng",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    });
}
export function handleCLickAddSPGioHang() {
    store.addNotification({
        title: "Thành công!",
        message: "Bạn đã thêm sản phẩm vào giỏ hàng",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    });
}
export function handleCLickCreateOrder() {
    store.addNotification({
        title: "Thành công!",
        message: "Bạn đã đặt món ăn thành công.",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    });
}
export function handleLoginFailed() {
    store.addNotification({
        title: "Đăng nhập không thành công.",
        message: " Vui lòng kiểm tra lại Email và mật khẩu",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 1500,
            onScreen: true
        }
    });
}