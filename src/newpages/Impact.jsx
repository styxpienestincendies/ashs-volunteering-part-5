import React from 'react'
// Fix later
import community from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/community.png';
import deeplearning from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/deep-learning.png';
import ownership from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/student-ownership.png';
import qualityproject from '/Users/abdul-qudusamidu/Documents/React-ASHS-Volunteering-Hub/ashs-volunteering-part-5/src/assests/quality-project.png';
import "./Impact.css"
import { HeroSlide } from '../componets/HeroSlide';


export const Impact = () => {
    return (
        <div>
            <HeroSlide />

            <h2 id="section-one">Impact Project Principles</h2>
            <div className="impact-projectprinciples-section">
                <div className="impact-projectprinciples">
                    <img src={ownership} alt="Student Ownership Image" />
                    <h3>Student ownership</h3>
                    <p>
                        The project focuses and builds on your interests, strengths, and passions. The project matters to you; you care about what you are doing.
                    </p>
                </div>
                <div className="impact-projectprinciples">
                    <img src={deeplearning} alt="Deep Learning Image" />
                    <h3>Substantial learning beyond the classroom</h3>
                    <p>
                        You know what you are learning in your projects AND how it can be transferred (and useful) beyond school. The learning offers challenge over a sustained period of time.
                    </p>
                </div>
                <div className="impact-projectprinciples">
                    <img src={qualityproject} alt="Quality Project Image" />
                    <h3>Quality product & process</h3>
                    <p>
                        As you learn about your project outcome, you develop a detailed understanding of what measures will make it high quality. You will use personas, users, and experts and stakeholders to inform this process.
                    </p>
                </div>
                <div className="impact-projectprinciples">
                    <img src={community} alt="Community Image" />
                    <h3>Participating and contributing to the community</h3>
                    <p>
                        Projects involve meaningful communication and learning with members of the community outside of school. External stakeholders will benefit from collaborating with you on your projects and possibly from the project product.
                    </p>
                </div>
            </div>

            <h2 id="section-two-title"> Discover Your Path to Impact with Our Community Hub! </h2>
            <p id="section-two-title-p"> Are you someone who believes in the power of service and wants to channel your skills into creating positive change? Our website is your gateway to endless possibilities. We're here to answer the question, "How Might We..." turn our skills into meaningful contributions that benefit the community?</p>

            <div class="section-two-content">

                <div class="section-two-content-title">
                    <h3>Explore a world of opportunities:</h3>
                </div>

                <div class="section-two-content-points">
                    <ul class="styled">
                        <li>Coach sports teams and nurture young talents.</li>
                        <li>Connect with local communities, offering innovative solutions.</li>
                        <li>Collaborate with the North Harbour Business Association to drive growth.</li>
                        <li>Partner with environmental groups and make a lasting ecological impact.</li>
                        <li>Identify and solve challenges within our school's neighborhood.</li>
                        <li>Bridge generational gaps, engaging with both young and older members.</li>
                        <li>Achieve the Duke of Edinburgh Award and serve with the Student Volunteer Army (SVA).</li>
                    </ul>
                </div>

                <div class="section-two-content-last-p">
                    <p>We've partnered with organizations like Starship, SPCA, World Vision, and local schools to amplify our impact. Join us on a journey of service, growth, and shared success. Let's shape a better future together!</p>
                </div>
            </div>
        </div>
    )
}


