import React from 'react';

import CarForm from '../CarForm';

const CarFormRow = props => (
  <tr>
    <td colSpan={6}>
      <CarForm {...props} />
    </td>
  </tr>
);

export default CarFormRow;
