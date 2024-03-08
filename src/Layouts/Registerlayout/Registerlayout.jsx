import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'


export default function Registerlayout() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div className="container">
    <a className="navbar-brand">
        <img src={logo} alt="" />
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/signin'>SignIn</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
    <Outlet/>
    </>
  )
}
