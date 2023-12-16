import React from 'react'
import './Sidebar.css'

import { BsCart3, BsGridFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsBoxArrowLeft } from 'react-icons/bs'


function Sidebar({openSidebarToggle,OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
        <BsCart3 className='icon' /> SUGAR CUBE
        </div>
        <span className='close_icon' onClick={OpenSidebar}>X</span>
      </div>
      
        
  

      <ul className='sidebar-list'>
        {/* 1 */}

        <li className='sidebar-list-item'>
          <a href="">
            <BsGridFill className='icon' /> Dashboard
          </a>
        </li>
        {/* 2 */}

        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Products
          </a>
        </li>
        {/* 3 */}

        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>
        </li>
        {/* 4 */}

        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        {/* 5 */}

        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>
        {/* 6 */}
        <li className='sidebar-list-item'>
          <a href="">
            <BsBoxArrowLeft className='icon' /> Signout
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar