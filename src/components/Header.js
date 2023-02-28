import React from 'react'
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/logo.avif"

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <NavLink className="header__logo" to="/"><img src={logo} alt=""/></NavLink>
                <nav className="header__nav">
                    <NavLink to="/" className="header__link">Home</NavLink>
                    <NavLink to="/weekly" className="header__link">Weekly</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header