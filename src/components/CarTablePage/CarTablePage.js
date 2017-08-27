import React from 'react';
import PropTypes from 'prop-types';

import CarRow from '../CarRow';
import CarFormRow from './CarFormRow';
import carShape from '../../carShape';

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

  if (editingCarId !== -1) {
    const editingCarIndex = findCarIndexById(cars, editingCarId);
    if (editingCarIndex !== -1) {
      // insert a CarFormRow for the car to be edited
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
  editingCarId: -1,
  onSaveCarChanges: () => {},
  onCancelCarChanges: () => {},
  onRowClick: () => {},
};

export default CarTablePage;
