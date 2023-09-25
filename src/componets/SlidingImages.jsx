import React from 'react';
import './SlidingImages.css';
import NewSrc from "../assests/43052.jpg"

export const SlidingImages = () => {
    return (
        <div className="container-2">
            <div className="content">
                <div className="image">
                    <img src={NewSrc} alt="Image Source: https://www.freepik.com/free-vector/people-volunteering-donating-money_3226107.htm" />
                </div>
                <div className="text">
                    <h2>Why You Should Join Us</h2>
                    <p>
                        The main purpose of the website is to spread awareness about volunteering and make it popular around the school.
                    </p>
                </div>
            </div>
        </div>
    );
};


