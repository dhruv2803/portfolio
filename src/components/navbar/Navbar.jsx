import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav">
                <li><NavLink exact activeClassName="active" to="/">Profile</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/experience">Experience</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/publication">Publication</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/projects">Projects</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/awards">Awards and Achievements</NavLink></li>
            </ul>
        </div>
    )
}
