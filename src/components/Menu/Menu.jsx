import React, { useState } from "react";
import './Menu.css'
import {NavLink} from 'react-router-dom'

const Menu = () => {

	const [toggleMenu, setToggleMenu] = useState (false)

	

	return (
		<div className="Menu">
			<ul>
				<li>
					<NavLink to='/my-orders' onClick={() => setToggleMenu.remove (toggleMenu)} >My Orders</NavLink>
				</li>
				<li>
					<NavLink to='/my-account' onClick={() => setToggleMenu.remove (toggleMenu)}>My account</NavLink>
				</li>
				<li>
					<NavLink to='/login' onClick={() => setToggleMenu.remove (toggleMenu)}>Sign out</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Menu;