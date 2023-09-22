import React from "react";
import "./Footer.css"
import companyLogo from '../assests/logo.png';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="Test">
                <div className="content">
                    {/* <h1>Main Content</h1> */}
                    { /* <p>Content goes here...</p> */}
                </div>

                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-logo">
                            <img src={companyLogo} alt="Logo" />
                        </div>
                        <div className="footer-links">
                            <ul>
                                <li>
                                    <Link to="/newpages/Home">Home</Link>
                                </li>

                                <li>
                                    <Link to="/about">What We Do</Link>
                                </li>


                                <li>
                                    <Link to="/impact">Impact</Link>
                                </li>

                                <li>
                                    <Link to="/stories"> Stories </Link>
                                </li>

                                <li>
                                    <Link to="/forum">Forum</Link>
                                </li>

                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}