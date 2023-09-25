import React from "react";
import imageSrc from "../assests/kids-planting-tree-city-park-children-with-gardening-tools-working-with-green-plants-outdoors_74855-10836.jpg"
import "./HomeSlider.css"

export const HomeSlider = () => {
    return (
        <>
            <div className="hero">
                <img src={imageSrc} alt="Image Source: https://www.freepik.com/free-vector/kids-planting-tree-city-park-children-with-gardening-tools-working-with-green-plants-outdoors_11235616.htm#query=volunteering&position=46&from_view=search&track=sph" className="hero__image" />
                <div className="hero__overlay">
                    <h1 className="hero__title">Volunteering: where hearts and hands come together.</h1>
                </div>
            </div>
        </>
    )
}