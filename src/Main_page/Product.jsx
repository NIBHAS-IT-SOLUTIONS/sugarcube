import React from 'react'
import { product } from '../Main_page/Data'
import './Product.css'
function Product() {
    return (
        <>
            <section className='product' id='products'>
                <h3 className='product-heading' >Our <span>Menu</span></h3>

                <div className='product-box'>
                  {
                  product.map((item,index)=>(
                    <div className="boxx">
                        <div className="product-icons">
                            <a href="#" className='fas fa-shopping-cart'></a>
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-eye'></a>

                        </div>
                        <div className="image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="product-content">
                            <h3>....</h3>
                            <div className="stars">
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star-half-alt'></i>

                            </div>
                            <div className="price">200</div>
                        </div>
                    </div>
                  ))
                  }

                </div>
            </section>
        </>
    )
}

export default Product

