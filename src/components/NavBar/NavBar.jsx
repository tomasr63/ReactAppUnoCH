import React from "react";

export const NavBar = () => {
    return (
        <nav className="navBar">
            <a href="#" className="logo"><h1>Tomás Web</h1></a>
            <ul className="menu">
                <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="#" className="menu-link">About</a></li>
                <li className="menu-item"><a href="#" className="menu-link">Features</a></li>
            </ul>
        </nav>
    );
}; 