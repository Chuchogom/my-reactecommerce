import React from 'react'
import logo from '../../assets/logoShop.svg';
import menu from '../../assets/menu.svg';
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        email@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <a href=""><CartWidget/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar