import React from 'react';
import Toggle from '../toggle/toggle';

import './footer.css';

/**
 * Footer component
 */
function Footer() {
  return (
    <footer className="footer spacing-base gutter-half" role="contentinfo">
      <Toggle idval="toggle-content-footer" />
    </footer>
  );
}

export default Footer;
