
import React from "react";
import "./nav.css";

function Nav() {
    return (
        <div className="navbar">
            <h2 className="nav-item">Programiz</h2>
            <h2 className="nav-item">Tutorials</h2>
            <h2 className="nav-item">Examples</h2>
            <h2 className="nav-item">Courses</h2>
            <input className="nav-search" type="text" placeholder="Search..." />
        </div>
    );
}

export default Nav;
