// import React from 'react'
// import './Login.css'
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa6";

// function Login() {
//   return (
//     <div className='wrapper'>
//       <form action="">
//         <h1>SUGAR CUBE</h1><h1>DELIGHTS</h1>
          
//         <div className="input-box">
//           <input type="text" placeholder='Username'  required/>
//           <FaUser className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type="password" placeholder='Password'  required/>
//           <FaLock className='icon'/>
//         </div>
//         <button type='submit'>Login</button>
//       </form>


//     </div>
//   )
// }

// export default Login






// model 1

import React from 'react'
import './Login.css'
import { FaHamburger } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';


function Login() {
  
  return (
    <>
   <div className='page'>
    <div className='cover'>
        <h1>Sugar <FaHamburger/> Cube</h1>
        <h1>Delights</h1>
        <div className='underline'></div>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <div className="login-btn">Login</div>

        <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
        </div>


    </div>
    </div>
    </>
  )
}

export default Login








