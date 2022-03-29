import { type } from 'jquery'
import React from 'react'
import { Link } from 'react-router-dom'


export const LeftSideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="icon-grid menu-icon" />
          <span className="menu-title">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          {/* <i className="icon-layout menu-icon" />  */}
          <i className="icon-head menu-icon" />
          <span className="menu-title">Employee</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu" >
            <li  className="nav-item"> <Link className="nav-link" to="users">Employee Details</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="adduser">Add Employee</Link></li>
            {/* <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li> */}
          </ul>
        </div>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
          <i className="icon-bar-graph menu-icon" />
          <span className="menu-title">Charts</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="charts">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Celebration</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link class="nav-link" to="celebrationdetail">Celebration details</Link></li>
                <li class="nav-item"> <Link class="nav-link" to="addcelebration">Add Celebration</Link></li>
              </ul>
            </div>
          </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
          <i className="icon-contract menu-icon" />
          <span className="menu-title">Icons</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="icons">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
          </ul>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
          <i className="icon-ban menu-icon" />
          <span className="menu-title">Error pages</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="error">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="pages/documentation/documentation.html">
          <i className="icon-paper menu-icon" />
          <span className="menu-title">Documentation</span>
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <i className=  "mdi mdi-login-variant"/>
          <i class="fa-solid fa-right-to-bracket"></i>
          {/* <img  src='images/ligin.png' /> */}
          <span className="menu-title px-3">Login</span>
          <i className="menu-arrow" />
        </Link>
        <i className="menu-arrow" />
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          <i className="mdi mdi-account-plus" />
          <span className="menu-title px-3">Register</span>
          <i className="menu-arrow" />
        </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <i className="mdi mdi-account-plus" />
          <span className="menu-title px-3">LogOut</span>
          <i className="menu-arrow" />
        </Link>
      </li>
    </ul>
  </nav>
  )
}
