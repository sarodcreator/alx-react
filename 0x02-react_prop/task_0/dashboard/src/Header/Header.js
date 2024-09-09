import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
    return (
        <div>
            <div>
                <img src={logo} className="App-logo" alt="holberton logo" />
                <h1>School dashboard</h1>
            </div>
        </div>
    );
}

export default Header;