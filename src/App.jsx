import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import React from 'react';
import Login from './Login_components/Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Dashboard_componets/Header';
import Home from './Dashboard_componets/Home';
import Sidebar from './Dashboard_componets/Sidebar';
import Navbar from './Main_page/Navbar';
import Mainhome from './Main_page/Mainhome';
import About from './Main_page/About';
import Menu from './Main_page/Menu';
import Product from './Main_page/Product';
import Contact from './Main_page/Contact';
import Footer from './Main_page/Footer';
import Addproduct from './Main_page/Addproduct';
import Payment from './Paymentpage/Payment';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)

  }
  return (

    <div>

      <Routes>
        {/* ========login======= */}
        <Route path="/" element={<Login />} />




        {/* =========dash board======== */}
        {/* <Route path='dashboard' element={<><Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> <Home /> <Header OpenSidebar={OpenSidebar} /></>} /> */}

        <Route path='dashboard' element={<><Header/><Sidebar/> <Home/></>} />
        {/* <Route path='dashboard' element={} />  */}




        {/* ========main======== */}
        <Route path='main' element={<><Navbar/> <Mainhome/> <About/> <Menu/> <Product/> <Contact/> <Footer/> </>} />


       <Route path='add' element={<Addproduct/>}/>
       <Route path='itempayment' element={<Payment/>}/>
 
      </Routes>





    </div>

  );
}

export default App;




