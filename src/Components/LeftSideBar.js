import { type } from 'jquery'
import React from 'react'
import { Link } from 'react-router-dom'


export const LeftSideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="mdi mdi-home " />
          <span className="menu-title px-3">Dashboard</span>
          <i className="menu-arrow" />
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          {/* <i className="icon-layout menu-icon" />  */}
          <i className="mdi mdi-account-multiple" />
          <span className="menu-title px-3">Employee</span>
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
      
      <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="mdi mdi-calendar-multiple"></i>
              <i class="fa-solid fa-right-to-bracket"></i>
              <span class="menu-title px-3">Celebration</span>
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
        <Link className="nav-link" to="/login">
          <i className=  "mdi mdi-login-variant"/>
          <i class="fa-solid fa-right-to-bracket"></i>
          {/* <img  src='images/ligin.png' /> */}
          <span className="menu-title px-3">Login</span>
          <i className="menu-arrow" />
        </Link>
        <i className="menu-arrow" />
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/signup">
          <i className="mdi mdi-account-plus" />
          <span className="menu-title px-3">Register</span>
          <i className="menu-arrow" />
        </Link>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <i className="mdi mdi-account-minus" />
          <span className="menu-title px-3">LogOut</span>
          <i className="menu-arrow" />
        </Link>
      </li>
    </ul>
  </nav>
  )
}
