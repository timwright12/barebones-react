import React from 'react';
import PropTypes from 'prop-types';

/**
 * Footer component
 */
const Card = ( props ) => (

	<li className="card">
		<h2>{props.name.first} {props.name.last}</h2>
		<img src={props.picture.medium} alt="" />
	</li>

);

Card.propTypes = {
	name: PropTypes.object,
	first: PropTypes.string,
	last: PropTypes.string,
	picture: PropTypes.object,
	medium: PropTypes.string
};

export default Card;
