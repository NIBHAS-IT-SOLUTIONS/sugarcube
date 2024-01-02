import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <>
  
    <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
        <div class="credit">
           <span>Sugar cube delights</span> | All rights reserved
        </div>
      </section>
   </>
  )
}

export default Footer