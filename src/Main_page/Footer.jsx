import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>

      <section class="footer">
        {/* location */}

        <div className='location'>
          <h3><i class="fa-solid fa-location-dot"></i> Irinjalakuda, Chandakkunnu <br />
          Opp.VyabaraBhavan
          </h3>
          <br />

        </div>
        <div className='number'>
          <h3><i class="fa-solid fa-phone"></i> +91 93 49 82 12 48</h3>
          <h3><i class="fa-solid fa-phone"></i> +91 98 46 35 88 97</h3>
          <h5>OPENING TIMES : 10 AM - 8 PM</h5>
         
        </div>

        {/* social media */}

        <div class="share">
          <a href="https://www.facebook.com/profile.php?id=100093379964343" class="fab fa-facebook-f"></a>
          <a href="https://www.instagram.com/sugarcubesdelights/" class="fab fa-instagram"></a>
        </div>

        {/* footer links */}

        <div class="links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        {/* credits */}

        <div class="credit">
          <span>Sugar cube delights</span> &copy; All rights reserved
        </div>
      </section>
    </>
  )
}

export default Footer


