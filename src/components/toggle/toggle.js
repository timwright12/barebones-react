import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Toggle component
 */
class Toggle extends Component {

	/**
	 * Constructor
	 */
	constructor( props ){

		super( props );

		this.state = {
			areLasersOn: false
		};

		this.activateLasers = this.activateLasers.bind( this );
	}

	/**
	 * Turning on and off the lasers!
	 */
	activateLasers() {

		this.setState( prevState => ( {
			areLasersOn: !prevState.areLasersOn
		} ) );

	}

	/**
	 * Standard render method
	 */
	render() {
		return (
			<div>
				<button
					onClick={this.activateLasers}
					type="button"
					className="button"
					aria-live="polite"
					aria-atomic="false"
					aria-relevant="text"
					aria-controls={this.props.idval}
				>
					Lasers are: {this.state.areLasersOn ? 'On' : 'Off'}
				</button>
				<div id={this.props.idval} aria-hidden={this.state.areLasersOn ? 'false' : 'true'}>
					<p>Welcome the Lasers.</p>
				</div>
			</div>
		);
	}
}

Toggle.propTypes = {
	idval: PropTypes.string
};

export default Toggle;
