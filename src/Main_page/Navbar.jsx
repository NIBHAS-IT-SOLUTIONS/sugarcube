import React, { useRef } from 'react'
import Logo from '../Assets/sugar-cube-high-resolution-logo-white.jpeg'
import './Navbar.css'
import { cart } from '../Main_page/Data'

function Navbar() {
  const searchRef = useRef();
const searchHandler =() => {
  searchRef.current.classList.toggle('active')
  
}

  const cartRef = useRef();
  const cartHandler = () => {
    cartRef.current.classList.toggle('active')
  };
  return (
    <>
      <header className='header'>
        <a href="#" className='logo'>
          <img src={Logo} alt="" />
        </a>
        <nav className='navbar'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>

        </nav>
        <div className="main-icons">

          <div className='icons'><i class="fas fa-search" onClick={searchHandler}></i></div>
          <div className='icons'><i class="fas fa-shopping-cart" onClick={cartHandler}></i></div>
          <div className='icons'><i class="fas fa-bars" id='menu-bar'></i></div>


        </div>
        <div className='search-form' ref={searchRef}>
          <input type="search" placeholder='search here...' className='search-box' />
          <label htmlFor="search-box" className='fas fa-search'></label>

        </div>

        <div className='cart-items-container' ref={cartRef}>
          {
            cart.map((item, index) => (
              <div className='cart-item' key={index}>
                <span className='fas fa-times'></span>
                <img src={item.img} alt="" />
                <div className="cart-content">
                  <h3>cart item</h3>
                  <div className="cart-price">100₹</div>
                </div>
              </div>
            ))
          }
          <a href="#" className='checkout-btn'>Check out</a>
        </div>
      </header>
    </>
  )
}

export default Navbar


