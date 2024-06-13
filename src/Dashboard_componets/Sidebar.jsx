import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-50 container' >

      <div className='m-3'>
        <i className='bi bi-boxes me-3 fs-4'></i>
        <span className='brand-name fs-4'>SUGAR CUBE</span>
      </div>

      <hr className='text-dark'/>

      <div className="list-group list-group-flush">
        
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-4 me-2'></i>
          <span className='fs-5'>Dashboard</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-house fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-table fs-4 me-2'></i>
          <span className='fs-5'>Products</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-clipboard-data fs-4 me-2'></i>
          <span className='fs-5'>Report</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-people-fill fs-4 me-2'></i>
          <span className='fs-5'>Customers</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-power fs-4 me-2'></i>
          <span className='fs-5'>Logout</span>
        </a>


        </div> 

    </div>
  )
}

export default Sidebar




// import React from 'react'
// import './Sidebar.css'

// import { BsCart3, BsGridFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsBoxArrowLeft } from 'react-icons/bs'


// function Sidebar({openSidebarToggle,OpenSidebar}) {
//   return (
//     <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
//       <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//         <BsCart3 className='icon' /> SUGAR CUBE
//         </div>
//         <span className='close_icon' onClick={OpenSidebar}>X</span>
//       </div>
      
        
  

//       <ul className='sidebar-list'>
//         {/* 1 */}

//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsGridFill className='icon' /> Dashboard
//           </a>
//         </li>
//         {/* 2 */}

//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsFillArchiveFill className='icon' /> Products
//           </a>
//         </li>
//         {/* 3 */}

//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsFillGrid3X3GapFill className='icon' /> Categories
//           </a>
//         </li>
//         {/* 4 */}

//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsPeopleFill className='icon' /> Customers
//           </a>
//         </li>
//         {/* 5 */}

//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsListCheck className='icon' /> Inventory
//           </a>
//         </li>
//         {/* 6 */}
//         <li className='sidebar-list-item'>
//           <a href="">
//             <BsBoxArrowLeft className='icon' /> Signout
//           </a>
//         </li>
//       </ul>
//     </aside>
//   )
// }

// export default Sidebar