import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar2 = (props) => {
    return (
        <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
            Home
        </NavLink>
        <NavLink exact to="/products" className="item">
            Products
        </NavLink>
        <NavLink exact to="/cart" className="item">
            Cart
        </NavLink>
        </div>
    );
};