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
    <form onSubmit={onSubmit} className='car-form'>
      <input type="text" name="name" onChange={changeHandlers.name} value={car.name} />
      { errors.name && <span className="error">{ errors.name }</span> }
      <input type="number" name="acceleration" step="0.1" onChange={changeHandlers.acceleration} value={car.acceleration} />
      { errors.acceleration && <span className="error">{ errors.acceleration }</span> }
      <div className='car-form-buttons'>
        <button type="submit" name="submit" disabled={hasError}>Save</button>
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
  }
};

export default CarFormPresentation;
