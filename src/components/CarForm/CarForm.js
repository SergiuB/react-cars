import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarFormPresentation from './CarFormPresentation';

class CarForm extends Component {
  constructor(props) {
    super(props);

    this.state = { car: { ...this.props.car } };
  }

  handleFieldChange = (fieldName, fieldValue) => {
    const fieldDef = this.props.model[fieldName];
    const fieldError = this.validateField(fieldValue, fieldDef);
    this.setState({
      car: {
        ...this.state.car,
        [fieldName]: fieldValue,
      },
      errors: {
        ...this.state.errors,
        [fieldName]: fieldError
      }
    });
  }

  validateField = (fieldValue, fieldDef) => {
    switch (fieldDef.type) {
      case 'string':
        return this.validateString(fieldValue);
      case 'number':
        return this.validateNumber(fieldValue, fieldDef.min, fieldDef.max);
      default:
        throw new Error('unsupported');
    }
  }

  validateString = (str) => {
    if (!str.length) {
      return 'Value is mandatory';
    }
    return '';
  }

  validateNumber = (n, min, max) => {
    if (isNaN(n) || !isFinite(n)) {
      return 'Invalid number';
    }
    if (n < min) {
      return `Value must be greater than ${min}`;
    }
    if (n > max) {
      return `Value must be lower than ${max + 1}`;
    }
    return '';
  }

  submit = (event) => {
    this.props.onSubmit(this.state.car);
    event.preventDefault();
  }

  render() {
    const { model, onCancel } = this.props;
    return (
      <CarFormPresentation
        {...this.state}
        model={model}
        onChangeField={this.handleFieldChange}
        onSubmit={this.submit}
        onCancel={onCancel}
      />
    );
  }
}

CarForm.propTypes = {
  car: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarForm.defaultProps = {
  onChangeField: () => {},
  onSubmit: () => {},
  onCancel: () => {}
};

export default CarForm;
