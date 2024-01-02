import React from 'react'
import './About.css'
import Aboutimg from '../Assets/aboutimg.jpg'

function About() {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='about-heading'>
                    <span>About</span> US
                </h1>
                <div className='about-row'>
                    <div className='about-img'>
                        <img src={Aboutimg} alt="" />
                    </div>
                    <div className='about-content'>
                        <h3> what makes us special</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores rem, qui assumenda nam omnis atque distinctio vero
                             debitis ullam commodi at facilis sunt officiis impedit quos tenetur possimus molestiae praesentium!</p>
                             <button className='about-btn'>Check Now!</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About