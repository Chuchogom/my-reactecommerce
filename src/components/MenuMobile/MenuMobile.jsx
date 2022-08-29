import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuMobile.css'


const MenuMobile = () => {
    
    const [toggleMobile, setToggleMobile] = useState(false);

  return (
      <div className="mobile-menu">
          <ul>
              <li>
                  <NavLink to='/' onClick={() => setToggleMobile.remove (toggleMobile)}>All</NavLink>
              </li>
              <li>
                  <NavLink to='/category/mens-clothing' onClick={() => setToggleMobile.remove (toggleMobile)}>Man</NavLink>
              </li>
              <li>
                  <NavLink to='/category/womens-clothing' onClick={() => setToggleMobile.remove (toggleMobile)}>Woman</NavLink>
              </li>
              <li>
                  <NavLink to='/category/electronics' onClick={() => setToggleMobile.remove (toggleMobile)}>Electronics</NavLink>
              </li>
              <li>
                  <NavLink to='/category/jewelery' onClick={() => setToggleMobile.remove (toggleMobile)}>Jewelry</NavLink>
              </li>
              <li>
                  <NavLink to='/my-orders' onClick={() => setToggleMobile.remove (toggleMobile)}>My orders</NavLink>
              </li>
              <li>
                  <NavLink to='/login' onClick={() => setToggleMobile.remove (toggleMobile)}>Log in</NavLink>
              </li>
              <li>
                  <NavLink to='/' className="email" onClick={() => setToggleMobile.remove (toggleMobile)}>example@email.com</NavLink>
              </li>
              <li>
                  <NavLink to='/' className="sing-out" onClick={() => setToggleMobile.remove (toggleMobile)}>Sing out</NavLink>
              </li>
          </ul>
      </div>

  )
}

export default MenuMobile