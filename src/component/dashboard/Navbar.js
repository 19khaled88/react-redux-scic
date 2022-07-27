import React from 'react';
import './navbar.css';

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <div className='navbar'>
     <div className='nav_icon' onClick={()=>openSidebar()}>
        <i className='fa fa-bars'></i>
     </div>
    
     <div className='navbar_left'>
        <a className='active_link' href="#">Tab-1</a>
        <a href="#">Tab-1</a>
        <a href="#">Tab-1</a>
     </div>
     <div className='navbar_right'>
        <a href='#'>
        <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href='#'>
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href='#'>
            <img src="" alt="" />
        </a>
     </div>
    </div>
  );
}

export default Navbar;
