import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import companyLogo from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/logo.png'; // Change

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>

            <h2 id='company-title'>ASHS Volunteering Hub</h2>
            <Link to="." className="title">
                <img src={companyLogo}></img>
            </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">What We Do</NavLink>
                </li>
                <li>
                    <NavLink to="/impact">Impact</NavLink>
                </li>
                <li>
                    <NavLink to="/stories">Stories</NavLink>
                </li>
                <li>
                    <NavLink to="/forum">Forum</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/button">Volunteer</NavLink>
                </li>
            </ul>
        </nav>
    );
}


