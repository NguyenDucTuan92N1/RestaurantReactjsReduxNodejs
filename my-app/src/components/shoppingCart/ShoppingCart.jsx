import './shoppingCart.css';
import CartIcon from '../svg/shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import React, { Component }  from 'react';

export default function ShoppingCart({onClick}) {
    return (
        <nav className="shopping" onClick={onClick}>
            <span className="shoppingNumber">0</span>
            <Link to ="/cart">
                <img src={CartIcon} alt="" className="shoppingImg" />
            </Link>
        </nav> 
    )

}
