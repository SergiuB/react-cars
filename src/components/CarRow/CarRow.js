import React from 'react';
import PropTypes from 'prop-types';

import carShape from '../../carShape';

const CarRow = ({
  car,
  editEnabled,
  onClick,
}) => (
  <tr className={`car-row ${editEnabled ? ' edit-enabled' : ''}`} onClick={onClick}>
    <td className='numeric-col'>{car.id}</td>
    <td className='text-col'>{car.name}</td>
    <td className='numeric-col'>{car.acceleration}</td>
  </tr>
);

CarRow.propTypes = {
  car: carShape.isRequired,
  editEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

CarRow.defaultProps = {
  editEnabled: false,
  onClick: () => {}
};

export default CarRow;
