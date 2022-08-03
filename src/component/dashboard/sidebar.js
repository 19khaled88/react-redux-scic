import React from 'react'
import { useSelector } from 'react-redux'
// import { Accordion } from 'react-bootstrap-accordion';
import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = ({ sidebarOpen, closeSideOpen }) => {
  const auth = useSelector((state) => state.auth)
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar_img">
          <img src="" alt="" />
          <p>Dashbard Pannel</p>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSideOpen()}
        ></i>
      </div>
      <div className="sidebar_menu">
        <div className="sidebar_link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <h2
          className={
            auth && auth.isAdmin === true
              ? 'adminTitle'
              : 'noAdminTitle disabled'
          }
        >
          <i
            className="fa fa-arrow-right"
            aria-hidden="true"
            style={{ paddingRight: '5px' }}
          ></i>
          Admin
        </h2>
        {/*<h2>Admin</h2>*/}
        <div className="sidebar_link">
          <i className="fa fa-group"></i>
          {auth && auth.isAdmin === true ? (
            <Link to="admin">Admin</Link>
          ) : (
            <Link className="noAdminTitle" to="#">
              Admin
            </Link>
          )}
        </div>
        <div className="sidebar_link">
          <i className="fa fa-product-hunt"></i>
          {auth && auth.isAdmin === true ? (
            <Link to="pManagement">Product Management</Link>
          ) : (
            <Link className="noAdminTitle" to="#">
              Product Management
            </Link>
          )}
        </div>
        <div className="sidebar_link">
          <i className="fa fa-first-order" aria-hidden="true"></i>
          {auth && auth.isAdmin === true ? (
            <Link to="oManagement">Order Management</Link>
          ) : (
            <Link className="noAdminTitle" to="#">
              Order Management
            </Link>
          )}
        </div>
        <div className="sidebar_link">
          <i className="fa fa-chain"></i>
          {auth && auth.isAdmin === true ? (
            <Link to="#">Distribution Management</Link>
          ) : (
            <Link className="noAdminTitle" to="#">
              Distribution Management
            </Link>
          )}
        </div>
        <div className="sidebar_link">
          <i className="fa fa-warehouse"></i>

          {auth && auth.isAdmin === true ? (
            <Link to="#">Warehouse Management</Link>
          ) : (
            <Link className="noAdminTitle" to="#">
              Warehouse Management
            </Link>
          )}
        </div>

        <h2>
          <i
            className="fa fa-arrow-right"
            aria-hidden="true"
            style={{ paddingRight: '5px' }}
          ></i>
          User
        </h2>
        <div className="sidebar_link">
          <i className="fa fa-user"></i>
          <a href="#">User</a>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Supply Management</a>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Store Management</a>
        </div>
        <h2>
          <i
            className="fa fa-arrow-right"
            aria-hidden="true"
            style={{ paddingRight: '5px' }}
          ></i>
          Logout
        </h2>
        <div className="sidebar_link ">
          <i className="fa fa-power-off"></i>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
