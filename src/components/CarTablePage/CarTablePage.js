import React from 'react';
import PropTypes from 'prop-types';

import CarRow from '../CarRow';
import CarFormRow from './CarFormRow';
import { NONE, carShape } from '../../constants';

const getCarRows = (cars, editingCarId, onRowClick) => cars.map(car => (
  <CarRow
    key={car.id}
    car={car}
    editEnabled={car.id === editingCarId}
    onClick={() => onRowClick(car.id)}
  />
));

const findCarIndexById = (cars, carId) => cars.findIndex(car => car.id === carId);

const CarTablePage = ({
  cars,
  editingCarId,
  onSaveCarChanges,
  onCancelCarChanges,
  onRowClick,
}) => {
  const allRows = getCarRows(cars, editingCarId, onRowClick);

  // insert a CarFormRow for the car to be edited
  if (editingCarId !== NONE) {
    const editingCarIndex = findCarIndexById(cars, editingCarId);
    if (editingCarIndex !== NONE) {
      const car = cars[editingCarIndex];
      allRows.splice(editingCarIndex + 1, 0, (
        <CarFormRow
          key={`${car.id}-form`}
          car={car}
          onSubmit={onSaveCarChanges}
          onCancel={onCancelCarChanges}
        />
      ));
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>acceleration</th>
        </tr>
      </thead>
      <tbody>
        {allRows}
      </tbody>
    </table>
  );
};

CarTablePage.propTypes = {
  cars: PropTypes.arrayOf(carShape).isRequired,
  editingCarId: PropTypes.number.isRequired,
  onSaveCarChanges: PropTypes.func.isRequired,
  onCancelCarChanges: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired,
};


CarTablePage.defaultProps = {
  editingCarId: NONE,
  onSaveCarChanges: () => {},
  onCancelCarChanges: () => {},
  onRowClick: () => {},
};

export default CarTablePage;
