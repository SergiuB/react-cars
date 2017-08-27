import React from 'react';

import CarForm from '../CarForm';

const CarFormRow = props => (
  <tr>
    <td>
      <CarForm {...props} />
    </td>
  </tr>
);

export default CarFormRow;
