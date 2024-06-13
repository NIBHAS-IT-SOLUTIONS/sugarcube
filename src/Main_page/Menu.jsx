import React from 'react'
import './Menu.css'
import {menu} from '../Main_page/Data'

function Menu() {

    return (
        <>
            <section className='menu' id='menu'>
                <h1 className='menu-heading'>
                    Our <span>Best-selling</span> Items
                </h1>
                <div className='menu-box'>
                    {
                        menu.map((item,index)=>(
                            <div className='box'>
                                <img src={item.img} alt="" />
                                <h3>Yummy&tasty</h3>
                                <div className='menu-price'>
                                ₹150 <span>200</span>
                                </div>
                               
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default Menu

