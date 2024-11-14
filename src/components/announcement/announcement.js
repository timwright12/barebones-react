import React from 'react';
import PropTypes from 'prop-types';

/**
 * Announcement component
 */
function Announcement(props) {
  return (
    <div className="visuallyhidden" aria-live="polite" aria-atomic="true">
      {props.message}
    </div>
  );
}

Announcement.propTypes = {
  message: PropTypes.string,
};

export default Announcement;
