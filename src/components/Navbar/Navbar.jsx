import React from 'react'
import logo from '../../assets/logoShop.svg';
import menu from '../../assets/menu.svg';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
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
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        <NavLink to='/my-account'>email@example.com</NavLink>
                    </li>
                    <li className="navbar-shopping-cart">
                        <NavLink to='/cart'><CartWidget/></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar