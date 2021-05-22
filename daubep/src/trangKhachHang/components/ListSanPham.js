import React, { Component } from 'react'
import SanPham from './SanPham'

let data = require('.././data/SanPham.json');

const listItems = data.map((item) =>
            <SanPham name={item["name"]} price = {item["price"]} detail = {item["detail"]}></SanPham>
            );

export default function ListSanPham() {
    console.log(data[0]);   
    
    return (
        <div className="row">
            {listItems}
        </div>
    )
}
