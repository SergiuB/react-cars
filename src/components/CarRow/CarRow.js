import React from 'react';
import PropTypes from 'prop-types';

const CarRow = ({
  id,
  name,
  acceleration,
  editEnabled,
  onClick,
}) => (
  <tr className={`car-row ${editEnabled ? ' edit-enabled' : ''}`} onClick={onClick}>
    <td className='numeric-col'>{id}</td>
    <td className='text-col'>{name}</td>
    <td className='numeric-col'>{acceleration}</td>
  </tr>
);

CarRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  acceleration: PropTypes.number.isRequired,
  editEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

CarRow.defaultProps = {
  editEnabled: false,
  onClick: () => {}
};

export default CarRow;
