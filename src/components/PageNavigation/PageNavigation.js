import React from 'react';
import PropTypes from 'prop-types';

import './PageNavigation.css';

const PageNavigation = ({
  nextEnabled,
  prevEnabled,
  onNext,
  onPrev,
}) => (
  <div className='page-navigation'>
    <button name='prev' onClick={onPrev} disabled={!prevEnabled}>Prev</button>
    <button name='next' onClick={onNext} disabled={!nextEnabled}>Next</button>
  </div>
);

PageNavigation.propTypes = {
  nextEnabled: PropTypes.bool.isRequired,
  prevEnabled: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

PageNavigation.defaultProps = {
  nextEnabled: true,
  prevEnabled: true,
  onNext: () => {},
  onPrev: () => {},
};

export default PageNavigation;
