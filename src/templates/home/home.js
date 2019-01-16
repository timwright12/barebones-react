import React, { Component } from 'react';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=3')
			.then(results => {
				return results.json();
			}).then(data => {
				let returnedData = data.results.map((dataMap) => {
					return(
						<div className="person" key={dataMap.results}>
							<h1>{dataMap.name.first} {dataMap.name.last}</h1>
							<img src={dataMap.picture.medium} alt="" />
						</div>
					)
				})
				this.setState({data: returnedData});
			})
	}

	render() {
		return (
			<div>
				{this.state.data}
			</div>
		);
	}
}

export default Home;
