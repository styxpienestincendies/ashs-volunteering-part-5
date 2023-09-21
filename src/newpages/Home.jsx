import React from 'react'

import "./Home.css"
import { HomeSlider } from '../componets/HomeSlider'
import { SlidingImages } from '../componets/SlidingImages'


export const Home = () => {
    return (
        <div class="container">
            <HomeSlider />
            <SlidingImages />
            <div class='first-image'>

            </div>

            <h2 class="h2 section-title">Services We Provided</h2>

            <p class="section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
            </p>

            <ul class="grid-list">

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> Tutoring </a>
                        </h3>

                        <p class="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque
                            ipsa quae.
                        </p>

                    </div>
                </li>

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> Dog Grooming </a>
                        </h3>

                        <p class="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque
                            ipsa quae.
                        </p>

                    </div>
                </li>

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> second hand shops </a>
                        </h3>

                        <p class="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque
                            ipsa quae.
                        </p>

                    </div>
                </li>

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> sport teaching </a>
                        </h3>

                        <p class="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque
                            ipsa quae.
                        </p>

                    </div>
                </li>

            </ul>

        </div>
    )
}


