import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

const routes = [
    {path: "/", text: "Home"} ,
    {path: "/products", text: "Products"}
]

const categories = [
    {path: "/category/mens", text: "Mens clothing"} ,
    {path: "/category/jewelery", text: "Jewelery"} ,
    {path: "/category/electronics", text: "Electronics"} ,
    {path: "/category/womens", text: "Womens clothing"}
]

export const NavBar = ({title}) => {
    return (
        <nav className="navBar">
            <div className="menu-container">
                <Link to="/" className="logo"><h1>{title}</h1></Link>
                <ul className="menu">
                    {routes.map(({path, text}) => {
                        return <li key={path} className="menu-item"><NavLink to={path} className="menu-link">{text}</NavLink></li>
                    })}
                    {categories.map(({path, text}) => {
                        return <li key={path} className="menu-item"><NavLink to={path} className="menu-link">{text}</NavLink></li>
                    })}
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};