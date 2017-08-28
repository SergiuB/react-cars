import React from 'react';
import PropTypes from 'prop-types';

import CarRow from '../CarRow';
import CarFormRow from './CarFormRow';
import { NONE, carShape } from '../../constants';

import './CarTablePage.css';

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
    <table className='car-table-page'>
      <thead className='bg-dark text-light'>
        <tr>
          <th className='id-col'>Id</th>
          <th>Name</th>
          <th className='large-col text-right'>Acceleration</th>
          <th className='large-col text-right'>Horse Power</th>
          <th className='small-col text-right'>Year</th>
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
