import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../dashboard/Navbar';
// import Main from './Main/Main';
import Sidebar from './sidebar';
const MainPage = () => {
    const location = useLocation()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const openSidebar=()=>{
        setSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
  return (
    <div className='container'>
        {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>*/ }
        <Navbar openSidebar={openSidebar}/>
            {location.pathname === '/dashboard' ? <p style={{padding:'10px',fontSize:'20px',color:'gray'}}>Welcome you to Dashboard</p> : ""}
        
            {/* <Main /> */}
        
            <Outlet />
        <Sidebar sidebarOpen={sidebarOpen} closeSideOpen={closeSidebar} />
    </div>
  );
}

export default MainPage;
