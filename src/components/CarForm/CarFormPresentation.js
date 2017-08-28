import React from 'react';
import PropTypes from 'prop-types';
import './CarFormPresentation.css';

const getInputType = fieldType => (fieldType === 'string' ? 'text' : fieldType);

const getFieldEl = (fieldDef, fieldName, fieldValue, fieldError, changeHandler) => (
  <div key={fieldName}>
    <label>
      {fieldName}
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
  car: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarFormPresentation.defaultProps = {
  errors: {}
};

export default CarFormPresentation;
