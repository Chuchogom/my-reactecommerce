import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuMobile.css'


const MenuMobile = () => {
  return (
      <div className="mobile-menu">
          <ul>
              <li>
                  <NavLink to='/' >All</NavLink>
              </li>
              <li>
                  <NavLink to='/category/mens-clothing' >Man</NavLink>
              </li>
              <li>
                  <NavLink to='/category/womens-clothing' >Woman</NavLink>
              </li>
              <li>
                  <NavLink to='/category/electronics' >Electronics</NavLink>
              </li>
              <li>
                  <NavLink to='/category/jewelery' >Jewelry</NavLink>
              </li>
              <li>
                  <NavLink to='/'>My orders</NavLink>
              </li>
              <li>
                  <NavLink to='/'>My account</NavLink>
              </li>
              <li>
                  <NavLink to='/' className="email">example@email.com</NavLink>
              </li>
              <li>
                  <NavLink to='/' className="sing-out">Sing out</NavLink>
              </li>
          </ul>
      </div>

  )
}

export default MenuMobile