import './App.css';
import React from 'react';
import Login from './Login_components/Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Dashboard_componets/Header';
import Home from './Dashboard_componets/Home';
import Sidebar from './Dashboard_componets/Sidebar';
import Main from './Main_page/Main';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)

  }
  return (


      <Routes>
        <Route path="/" element={<Login />} />


        <Route path='dashboard' element={<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />} />
        <Route path='dashboard' element={<Home />} />
        <Route path='dashboard' element={<Header OpenSidebar={OpenSidebar} />} />
        <Route path='dashboard/main' element={<Main/>}/>

      </Routes>
   

  );
}

export default App;
