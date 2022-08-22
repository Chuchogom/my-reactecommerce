import React, { useState } from 'react'
import logo from '../../assets/logoShop.svg';
import menu from '../../assets/menu.svg';
import CartWidget from '../CartWidget/CartWidget'
import MyOrder from '../MyOrder/MyOrder';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Menu from '../Menu/Menu';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const handleToggle = () => {
		setToggle(!toggle);
	}

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
                    <li className="navbar-email" onClick={handleToggle}>
                        email@example.com
                    </li>
                    <li className="navbar-shopping-cart" 
						// onClick={() => setToggleOrders (!toggleOrders)}
                        >
                        <CartWidget/>
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {/* {toggleOrders && <MyOrder/>} */}
        </nav>
    )
}

export default Navbar