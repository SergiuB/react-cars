import React from 'react';
import PropTypes from 'prop-types';
import './CarFormPresentation.css';

const CarFormPresentation = ({
  car,
  errors,
  changeHandlers,
  onSubmit,
  onCancel,
}) => {
  const hasError = !!(errors.name || errors.acceleration);
  return (
    <form onSubmit={onSubmit} className='car-form border border-primary'>
      <div className='car-form-fields'>
        <label>Name <input type="text" name="name" onChange={changeHandlers.name} value={car.name} /></label>
        { errors.name && <span className="text-danger"><small>{ errors.name }</small></span> }
        <label>Acceleration <input type="number" name="acceleration" step="0.1" onChange={changeHandlers.acceleration} value={car.acceleration} /></label>
        { errors.acceleration && <span className="text-danger"><small>{ errors.acceleration }</small></span> }
        <label>Horsepower <input type="number" name="horsepower" onChange={changeHandlers.horsepower} value={car.horsepower} /></label>
        { errors.horsepower && <span className="text-danger"><small>{ errors.horsepower }</small></span> }
        <label>Year <input type="number" name="year" onChange={changeHandlers.year} value={car.year} /></label>
        { errors.year && <span className="text-danger"><small>{ errors.year }</small></span> }
      </div>
      <div className='car-form-buttons'>
        <button type="submit" name="submit" className='text-primary' disabled={hasError}>Save</button>
        <button type="button" name="cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

CarFormPresentation.propTypes = {
  car: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  changeHandlers: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarFormPresentation.defaultProps = {
  errors: {
    name: '',
    acceleration: '',
    horsepower: '',
    year: '',
  }
};

export default CarFormPresentation;
