import React, { Component } from 'react';
import Card from '../../components/card/card';

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
		};
	}

	/**
	 * componentDidMount
	 */
	componentDidMount() {
		fetch( 'https://randomuser.me/api/?results=3' )
			.then( results => {
				return results.json();
			} ).then( data => {
				let returnedData = data.results.map( ( dataMap ) => {
					return(
						<Card key={dataMap.results} {...dataMap} />
					);
				} );
				this.setState( {data: returnedData} );
			} );
	}

	/**
	 * Standard render method
	 */
	render() {
		return (
			<div className="spacing-base">
				<ul className="spacing-clear gutter-clear list-clear">
					{this.state.data}
				</ul>
			</div>
		);
	}
}

export default Home;
