import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
            Welcome
        </NavLink>
        <NavLink exact to="/products" className="item">
            Products
        </NavLink>
        <NavLink exact to="/products/new" className="item">
            New Product
        </NavLink>
        </div>
    );
};