import React from 'react'

import "./Home.css"
import { HomeSlider } from '../componets/HomeSlider'
import { SlidingImages } from '../componets/SlidingImages'


export const Home = () => {
    return (
        <div class="container">
            <HomeSlider />
            <SlidingImages />


            <div class="centered-content">
                <h2 class="h2 section-title">Services We Provided</h2>
                <p class="section-text">
                    Delivering Excellence, One Service at a Time.
                </p>
            </div>

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
                            Empowering students through tutoring, I offer my time and expertise to help them excel academically. Together, we unlock their potential and inspire a love for learning. #VolunteerTutoring 📚💡
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
                            Transforming furry friends into pampered perfection! 🐾 With love and care, I provide top-notch grooming services for happy, healthy pups. Book your dog's spa day today! 🛁🐶 #DogGrooming
                        </p>

                    </div>
                </li>

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> Second Hand Shops </a>
                        </h3>

                        <p class="card-text">
                            Discover hidden treasures at our second-hand boutique! ♻️ Every item has a story, and yours begins here. Sustainable fashion, home goods, and more. Join us in reducing waste and embracing style!
                        </p>

                    </div>
                </li>

                <li>
                    <div class="service-card">

                        <div class="card-icon">
                            {/*<ion-icon name="chatbox"></ion-icon>*/}
                        </div>

                        <h3 class="h3">
                            <a href="#" class="card-title"> Sport Teaching </a>
                        </h3>

                        <p class="card-text">
                            Passion for sports, dedication to growth! 🏀⚽ Offering expert coaching to athletes of all levels. Together, we'll elevate your game, build skills, and ignite your competitive spirit. Let's train for success! 🥇🔥 #SportCoaching
                        </p>

                    </div>
                </li>

            </ul>

        </div>
    )
}


