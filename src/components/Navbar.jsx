import React, { useEffect } from 'react'
import logo from '../assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { storecontext } from '../Context/Context'

export default function Navbar() {
  let {counter ,setCounter,getcart}=useContext(storecontext)

  useEffect(()=>{
    (async()=>{
      let data=await getcart()
      console.log(data);
      setCounter(data.numOfCartItems)

    })()

  },[])
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 ">
  <div className="container">
    <a className="navbar-brand">
        <img src={logo} alt="" />
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/products'>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categories'>Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/brands'>Brands</NavLink>
        </li>
        </ul>
        <ul className="navbar-nav ms-auto m-2 mb-lg-0">
        <li className="nav-item px-3">
          <NavLink className="nav-link position-relative" aria-current="page" to='/wishlist'>
        WishList
        <i className="fa-solid fa-heart"></i>
</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link position-relative" aria-current="page" to='/cart'>
        Carts
          <i className="fa-solid fa-cart-shopping"></i>
          {counter?<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {counter}
        <span className="visually-hidden">unread messages</span>
            </span>:''}
</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink className="nav-link position-relative" aria-current="page" to='/signout'>
        SignOut
</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>



    </>
  )
}
