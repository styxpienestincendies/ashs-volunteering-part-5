import React from "react";
import imageSrc from "../assests/volunteering_waifu2x_art_noise1_scale_waifu2x_art_noise1_scale.jpg"
import "./HomeSlider.css"

export const HomeSlider = () => {
    return (
        <>
            <div className="hero">
                <img src={imageSrc} alt="Travel" className="hero__image" />
                <div className="hero__overlay">
                    <h1 className="hero__title">Volunteering: where hearts and hands come together.</h1>
                </div>
            </div>
        </>
    )
}