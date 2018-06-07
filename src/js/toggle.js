import React, { Component } from 'react';

class Toggle extends Component {
	
	constructor( props ){

		super( props );

		this.state = {
			areLasersOn: false
		};

		this.activateLasers = this.activateLasers.bind( this );
	};
	
	activateLasers() {
		
		this.setState( prevState => ( {
			areLasersOn: !prevState.areLasersOn
		} ) );

	}
	
	render() {
		return (
			<div>
				<button 
					onClick={this.activateLasers}
					type="button"
					className="button"
					aria-live="polite"
					aria-atomic="false"
					aria-relevent="text"
					aria-controls={this.props.idVal}
				>
					Lasers are: {this.state.areLasersOn ? 'On' : 'Off'}
				</button>
				<div id={this.props.idVal} aria-hidden={this.state.areLasersOn ? 'false' : 'true'}>
					<p>Welcome the Lasers.</p>
				</div>
			</div>
		);
	}
}

export default Toggle;
