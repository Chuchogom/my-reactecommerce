import React from "react";
import './Menu.css'
import {NavLink} from 'react-router-dom'

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<NavLink to='/my-orders' >My Orders</NavLink>
				</li>
				<li>
					<NavLink to='/my-account'>My account</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Sign out</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Menu;