import React, { Component } from 'react';
import Card from '../../components/card/card';
import Announcement from '../../components/announcement/announcement';

/**
 * Homepage template
 */
class Home extends Component {

	/**
	 * Basic constructor
	 */
	constructor() {
		super();
		this.state = {
			data: [],
			announcementMessage: null
		};
	}

	/**
	 * componentDidMount
	 */
	componentDidMount() {

		document.title = 'Home';
		this.container.focus();

		fetch( 'https://randomuser.me/api/?results=3' )
			.then( results => {
				return results.json();
			} ).then( data => {
				const returnedData = data.results.map( ( dataMap ) => {
					return(
						<Card key={dataMap.results} {...dataMap} />
					);
				} );
				this.setState( {data: returnedData} );
			} );

		this.setState( { announcementMessage: 'The home page has loaded'} );

	}

	/**
	 * Standard render method
	 */
	render() {
		return (
			<div className="spacing-base" tabIndex="-1" aria-labelledby="page-title" ref={( container ) => { this.container = container; }}>
				<h1 id="page-title">Hello, Homepage</h1>
				<ul className="spacing-clear gutter-clear list-clear">
					{this.state.data}
				</ul>
				<Announcement message={this.state.announcementMessage} />
			</div>
		);
	}
}

export default Home;
