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
						<ul className="card__list" key={dataMap.results}>
							<Card {...dataMap} />
						</ul>
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
			<div>
				{this.state.data}
			</div>
		);
	}
}

export default Home;
