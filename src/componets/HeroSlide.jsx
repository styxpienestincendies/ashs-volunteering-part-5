import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import volunteeringwork1 from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/volunteering-work.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import volunteeringwork2 from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/volunteering-work-2.jpg';
import volunteeringwork3 from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/volunteering-work-3.jpg';
import volunteeringwork4 from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/volunteering-work-4.jpg';
import "./HeroSlide.css"

export const HeroSlide = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork4}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Coaching and Volunteering for a Purpose</h3>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>


        </>
    );
}