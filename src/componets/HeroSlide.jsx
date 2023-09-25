import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import volunteeringwork1 from '../assests/volunteering-work.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import volunteeringwork2 from '../assests/volunteering-work-2.jpg';
import volunteeringwork3 from '../assests/volunteering-work-3.jpg';
import volunteeringwork4 from '../assests/volunteering-work-4.jpg';
import "./HeroSlide.css"

export const HeroSlide = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork1}
                        alt="Image Source: https://unsplash.com/photos/YwpFllVSpvU"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork2}
                        alt="Image Source: https://unsplash.com/photos/y3ZY6qFln_g"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork3}
                        alt="Image Source: https://pixabay.com/photos/volunteer-pollution-bottle-plastic-7788809/"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork4}
                        alt="Image Source: https://unsplash.com/photos/2b-P_jWjh7I"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>


        </>
    );
}