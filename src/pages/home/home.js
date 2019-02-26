import React, { Component } from 'react';

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
						<div className="person" key={dataMap.results}>
							<h1>{dataMap.name.first} {dataMap.name.last}</h1>
							<img src={dataMap.picture.medium} alt="" />
						</div>
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
