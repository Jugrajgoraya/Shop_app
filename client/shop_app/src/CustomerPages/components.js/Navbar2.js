import React from 'react'
import { NavLink } from "react-router-dom";
import '../../App.css'

export const NavBar2 = (props) => {
    return (
        <div className="ui green secondary pointing menu navbar">
        <NavLink exact to="/" className="item">
            <h2 className="navbarMenu">Home</h2>
        </NavLink>
        <NavLink exact to="/products" className="item">
            <h2 className="navbarMenu">Products</h2>
        </NavLink>
        <NavLink exact to="/cart" className="item">
            <h2 className="navbarMenu">Cart</h2>
        </NavLink>
        <NavLink exact to="/logIn" className="item">
            <h2 className="navbarMenu">Log In</h2>
        </NavLink>
        </div>
    );
};