import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import volunteeringwork1 from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/volunteering-work.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import volunteeringwork2 from 'src/assests/volunteering-work-2.jpg';
//import volunteeringwork3 from 'src/assests/volunteering-work-3.jpg';
//import volunteeringwork4 from 'src/assests/volunteering-work-4.jpg';

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={volunteeringwork1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>


        </>
    );
}