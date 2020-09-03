import React from 'react'
import { NavLink } from "react-router-dom";
import {Session} from '../../api/session'
import '../../App.css'

export const NavBar = (props) => {

    return (
        <div className="ui green secondary pointing menu navbar">
        <NavLink exact to="/" className="item">
        <   h2 className="navbarMenu">Welcome</h2>
        </NavLink>
        <NavLink exact to="/products" className="item">
            <h2 className="navbarMenu">Products</h2>
        </NavLink>
        <NavLink exact to="/products/new" className="item">
            <h2 className="navbarMenu">New Product</h2>
        </NavLink >
        <button onClick={()=>{props.handleLogOut()}}>
            <h2 className="navbarMenu">Log Out</h2>
        </button>
        </div>
    );
};