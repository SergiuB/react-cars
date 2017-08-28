import React from 'react';
import PropTypes from 'prop-types';

import { carShape } from '../../constants';

import './CarRow.css';

const getCellClass = (fieldType) => {
  switch (fieldType) {
    case 'string':
      return 'text-col text-capitalize';
    case 'number':
      return 'numeric-col text-right';
    default:
      throw new Error('unsupported field type');
  }
};

const CarRow = ({
  car,
  model,
  editEnabled,
  onClick,
}) => (
  <tr className={`border car-row ${editEnabled ? ' edit-enabled bg-primary text-light' : ''}`} onClick={onClick}>
    <td className='numeric-col'>{car.id}</td>
    {Object.keys(model).map((fieldName) => {
      const field = model[fieldName];
      return <td key={fieldName} className={getCellClass(field.type)}>{car[fieldName]}</td>;
    })}
  </tr>
);

CarRow.propTypes = {
  car: carShape.isRequired,
  model: PropTypes.object.isRequired,
  editEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

CarRow.defaultProps = {
  editEnabled: false,
  onClick: () => {}
};

export default CarRow;
