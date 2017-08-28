import React from 'react';
import PropTypes from 'prop-types';

import CarRow from '../CarRow';
import CarFormRow from './CarFormRow';
import { NONE, carShape } from '../../constants';
import model from '../../model';

import './CarTablePage.css';

const getCarRows = (cars, editingCarId, onRowClick) => cars.map(car => (
  <CarRow
    key={car.id}
    car={car}
    model={model}
    editEnabled={car.id === editingCarId}
    onClick={() => onRowClick(car.id)}
  />
));

const findCarIndexById = (cars, carId) => cars.findIndex(car => car.id === carId);

const getHeaderCellClass = (fieldType) => {
  switch (fieldType) {
    case 'string':
      return 'text-capitalize';
    case 'number':
      return 'text-right text-capitalize';
    default:
      throw new Error('unsupported field type');
  }
};

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
          model={model}
          onSubmit={onSaveCarChanges}
          onCancel={onCancelCarChanges}
          colSpan={1 + Object.keys(model).length}
        />
      ));
    }
  }

  return (
    <table className='car-table-page'>
      <thead className='bg-dark text-light'>
        <tr>
          <th className='id-col'>Id</th>
          {Object.keys(model).map((fieldName) => {
            const field = model[fieldName];
            return <th key={fieldName} className={getHeaderCellClass(field.type)}>{fieldName}</th>;
          })}
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
