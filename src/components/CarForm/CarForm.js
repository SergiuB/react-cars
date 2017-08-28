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
    const fieldError = this.props.validateField(fieldValue, fieldDef);
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
  validateField: PropTypes.func.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarForm.defaultProps = {
  validateField: () => '',
  onChangeField: () => {},
  onSubmit: () => {},
  onCancel: () => {}
};

export default CarForm;
