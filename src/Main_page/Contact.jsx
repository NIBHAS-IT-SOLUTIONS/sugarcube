import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <section className="contact" id='contact'>
                <h1 className='heading'>
                    <span>Contact</span> us
                </h1>
                <div className='row'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.982490205292!2d76.2124943111052!3d10.343284889737744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f73ab0ffdc91%3A0x722b711fe07ac919!2sSugar%20Cube%20Delights!5e0!3m2!1sen!2sin!4v1703916756262!5m2!1sen!2sin" allowFullScreen="" loading='lazy'></iframe>
                    <form action="">
                        <h3>get in touch</h3>
                        <div className="inputBox">
                            <span className='fas fa-user'></span>
                            <input type="text" placeholder='name' />
                        </div>
                        <div className="inputBox">
                            <span className='fas fa-envelope'></span>
                            <input type="email" placeholder='Mail' />
                        </div>
                        <div className="inputBox">
                            <span className='fas fa-phone'></span>
                            <input type="number" placeholder='number' />
                        </div>
                        <input type="submit" value='contact now' className='btn' />
                    </form>
                </div>
            </section>
        </>
    )
}
export default Contact



