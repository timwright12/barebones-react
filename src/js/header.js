import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header" role="banner">
				<ul>
					<li><a href="#!">Home</a></li>
					<li><a href="#!">About</a></li>
					<li><a href="#!">Contact</a></li>
				</ul>
			</header>
		);
	}
}

export default Header;
