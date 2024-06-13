import React from 'react'
import './About.css'
// import Aboutimg from '../Assets/aboutimg.jpg'

function About() {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='about-heading'>
                    <span>About</span> US
                </h1>
                <div className='about-row'>
                    <div className='about-img'>
                        <img src="https://i.postimg.cc/wj2T3yDF/aboutimg.jpg" alt="" />
                    </div>
                    <div className='about-content'>
                        <h3> what makes us special</h3>
                        <p>Cooking is a caring and nurturing act.It's a kind of the ultimate gift for someone,to cook for them</p>
                             <button className='about-btn'>Check Now!</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About


