import React, { Component } from 'react';
import Announcement from '../../components/announcement/announcement';

/**
 * About page template
 */
class About extends Component {

	/**
	 *
	 */
	constructor() {
		super();

		// Set the initial component state
		this.state = {
			announcementMessage: null
		};
	}

	/**
	 *
	 */
	componentDidMount() {
		document.title = 'About';
		this.setState( { announcementMessage: 'The about page has loaded'} );
		this.container.focus();
	}


	/**
	 * Standard render method
	 */
	render() {
		return (
			<div tabIndex="-1" aria-labelledby="page-title" ref={( container ) => { this.container = container; }}>
				<h1 id="page-title">Hello, About page</h1>
				This is the about page.
				<Announcement message={this.state.announcementMessage} />
			</div>
		);
	}



}

export default About;
