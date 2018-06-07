import React, { Component } from 'react';

import Toggle from './toggle';

class Footer extends Component {
	
	render() {
		return (
			<footer className="footer" role="contentinfo">
				<Toggle idVal="toggle-content-footer"/>
			</footer>
		);
	}
}

export default Footer;
