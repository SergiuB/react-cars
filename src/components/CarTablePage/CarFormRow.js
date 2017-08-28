import React from 'react';
import PropTypes from 'prop-types';

import CarForm from '../CarForm';

const CarFormRow = ({ colSpan, ...rest }) => (
  <tr>
    <td colSpan={colSpan}>
      <CarForm {...rest} />
    </td>
  </tr>
);

CarFormRow.propTypes = {
  colSpan: PropTypes.number.isRequired,
};

CarFormRow.defaultProps = {
  colSpan: 1,
};

export default CarFormRow;
