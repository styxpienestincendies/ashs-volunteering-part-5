import React from "react";
import "./Footer.css"
import companyLogo from '../assests/logo.png';

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
                                <li><a href="#">Home</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Stories</a></li>
                                <li><a href="#">Forum</a></li>
                                <li><a href="#">Contact</a></li>
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