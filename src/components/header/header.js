import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

/**
 * Header component
 */
const Header = () => (

	<header className="header spacing-base gutter-half" role="banner">
		<ul className="spacing-clear gutter-clear list-clear">
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
		</ul>
	</header>

);

export default Header;
