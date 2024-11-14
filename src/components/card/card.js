import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

/**
 * Card component
 */
function Card(props) {
  return (
    <li className="card spacing-quarter gutter-quarter">
      <h2 className="card__title">
        {props.name.first}
        {' '}
        {props.name.last}
      </h2>
      <img className="card__media" src={props.picture.medium} alt={props.picture.alt} />
    </li>
  );
}

Card.propTypes = {
  name: PropTypes.object,
  first: PropTypes.string,
  last: PropTypes.string,
  picture: PropTypes.object,
  medium: PropTypes.string,
	alt: PropTypes.string,
};

export default Card;
