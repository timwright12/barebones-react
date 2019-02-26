import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

/**
 * Header component
 */
const Header = () => (

	<header className="header" role="banner">
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
		</ul>
	</header>

);

export default Header;
