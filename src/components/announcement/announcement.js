import React from 'react';
import PropTypes from 'prop-types';

/**
 * Footer component
 */
const Announcement = ( props ) => (

	<div className="visuallyhidden" aria-live="polite" aria-atomic="true">
		{props.message}
	</div>

);

Announcement.propTypes = {
	message: PropTypes.string
};

export default Announcement;
