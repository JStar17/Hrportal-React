import { type } from 'jquery'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LeftSideBar = () => {
  var navigate = useNavigate()
  useEffect(() => {
    navigate('/')

  }, [])
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
        <a className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample" data-target="#collapseExample">
          {/* <i className="icon-layout menu-icon" />  */}
          <i className="mdi mdi-account-multiple" />
          <span className="menu-title px-3">Employee</span>
          <i className="menu-arrow" />
        </a>
        <div className="collapse" id="collapseExample">
          <ul className="nav flex-column sub-menu" >
            <li  className="nav-item"> <Link className="nav-link" to="users">Employee Details</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="adduser">Add Employee</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="addrole">Add Role</Link></li>
            {/* <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li> */}
          </ul>
        </div>
      </li>
      <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#Example" aria-expanded="false" aria-controls="Example">
              <i class="mdi mdi-square-inc-cash"></i>
              <i class="fa-solid fa-right-to-bracket"></i>
              <span class="menu-title px-3">PayRoll</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="Example">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link class="nav-link" to="empsalary">Employee Salary</Link></li>
              </ul>
            </div>
          </li>
      
      
      <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="mdi mdi-calendar-multiple"></i>
              <i class="fa-solid fa-right-to-bracket"></i>
              <span class="menu-title px-3">Celebrations</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link class="nav-link" to="celebrationdetail">Celebrations Details</Link></li>
                <li class="nav-item"> <Link class="nav-link" to="addcelebration">Add Celebrations</Link></li>
              </ul>
            </div>
          </li>
     
      <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="mdi mdi-contact-mail"></i>
              <i class="fa-solid fa-right-to-bracket"></i>
              <span class="menu-title px-3">Leave</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
              {localStorage.getItem('role')=="HR "?<li class="nav-item"> <Link class="nav-link" to="leavedetails">Leave Details</Link></li>:""}
                <li class="nav-item"> <Link class="nav-link" to="addleave">Apply for Leave</Link></li>
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
