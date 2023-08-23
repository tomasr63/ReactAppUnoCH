import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="menu-container">
                <a href="#" className="logo"><h1>BOTTLE</h1></a>
                <ul className="menu">
                    <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">About</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Features</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};