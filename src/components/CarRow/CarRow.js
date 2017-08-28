import React from 'react';
import PropTypes from 'prop-types';

import { carShape } from '../../constants';

import './CarRow.css';

const CarRow = ({
  car,
  editEnabled,
  onClick,
}) => (
  <tr className={`border car-row ${editEnabled ? ' edit-enabled bg-primary text-light' : ''}`} onClick={onClick}>
    <td className='numeric-col'>{car.id}</td>
    <td className='text-col'>{car.name}</td>
    <td className='numeric-col text-right'>{car.acceleration}</td>
    <td className='numeric-col text-right'>{car.horsepower}</td>
    <td className='numeric-col text-right'>{car.year}</td>
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
