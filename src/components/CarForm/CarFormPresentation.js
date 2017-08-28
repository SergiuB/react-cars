import React from 'react';
import PropTypes from 'prop-types';
import './CarFormPresentation.css';

import { carShape, modelShape, errorsShape } from '../../constants';

const getInputType = fieldType => (fieldType === 'string' ? 'text' : fieldType);

const getFieldEl = (fieldDef, fieldName, fieldValue, fieldError, changeHandler) => (
  <div key={fieldName} className='car-form-field'>
    <label>
      <span className='text-capitalize label-text'>{fieldName}</span>
      <input
        type={getInputType(fieldDef.type)}
        name={fieldName}
        onChange={changeHandler}
        value={fieldValue}
      />
    </label>
    { fieldError && <span className="text-danger"><small>{fieldError}</small></span> }
  </div>
);

const CarFormPresentation = ({
  car,
  model,
  errors,
  onChangeField,
  onSubmit,
  onCancel,
}) => {
  const hasError = Object.keys(errors).find(fieldName => !!errors[fieldName]);
  return (
    <form onSubmit={onSubmit} className='car-form border border-primary'>
      <div className='car-form-fields'>
        {Object.keys(model).map((fieldName) => {
          const fieldDef = model[fieldName];
          const changeHandler = event => onChangeField(fieldName, event.target.value);
          return getFieldEl(fieldDef, fieldName, car[fieldName], errors[fieldName], changeHandler);
        })}
      </div>
      <div className='car-form-buttons'>
        <button type="submit" name="submit" className='text-primary' disabled={hasError}>Save</button>
        <button type="button" name="cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

CarFormPresentation.propTypes = {
  car: carShape.isRequired,
  model: modelShape.isRequired,
  errors: errorsShape.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarFormPresentation.defaultProps = {
  errors: {}
};

export default CarFormPresentation;
