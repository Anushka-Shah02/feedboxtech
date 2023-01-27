import React, { useEffect } from "react";
import './About.css'
import AboutImg from '../../image/about-animation.gif'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 850,
            offset: 250
        })
    })

    return (
        <div className="a-container" id="about"

        >
            <h1 className="about_heading" data-aos="flip-left"
            >About Us</h1>
            <div className="a_content" 
            >
                <div className="a_content_img_hld">
                    <img src={AboutImg} alt="" />
                </div>

                <div className="about_content_desc">

                    <p>Feedbox tech is meant to provide top-developing
                        services to companies that enhance their web presence,
                        provide digital solutions, and evolve their way of working
                        added with the top-notch feedbox marketing strategies
                        to give our clients a long jump in their business. Our tech
                        team can develop apps and websites with wordpress,
                        react and other trending technologies.</p>
                    <div class="about_content_desc_btn">
                        <a href="#" className="">know more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}