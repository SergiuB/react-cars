import React from 'react';
import PropTypes from 'prop-types';
import './CarFormPresentation.scss';

const CarFormPresentation = ({
    name,
    nameError,
    onChangeName,
    acceleration,
    accelerationError,
    onChangeAcceleration,
    onSubmit,
    onCancel,
  }) => {
    const hasError = !!(nameError || accelerationError);
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name" onChange={onChangeName} value={name}/>
          { nameError && <span className="error">{ nameError }</span> }
        <input type="number" name="acceleration" onChange={onChangeAcceleration} value={acceleration}/>
          { accelerationError && <span className="error">{ accelerationError }</span> }
        <button type="submit" name="submit" disabled={hasError}>Save</button>
        <button type="button" name="cancel" onClick={onCancel}>Cancel</button>
      </form>
    );
  }

CarFormPresentation.propTypes = {
  name: PropTypes.string.isRequired,
  nameError: PropTypes.string.isRequired,
  acceleration: PropTypes.number.isRequired,
  accelerationError: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeAcceleration: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarFormPresentation.defaultProps = {
  nameError: '',
  accelerationError: '',
}

export default CarFormPresentation;