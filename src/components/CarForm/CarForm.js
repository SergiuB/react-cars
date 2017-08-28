import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarFormPresentation from './CarFormPresentation';

class CarForm extends Component {
  constructor(props) {
    super(props);

    this.state = { car: { ...this.props.car } };
  }

  updateFieldAndError = (fieldName, fieldValue, fieldError) =>
    this.setState({
      car: {
        ...this.state.car,
        [fieldName]: fieldValue,
      },
      errors: {
        ...this.state.errors,
        [fieldName]: fieldError
      }
    })

  changeName = (event) => {
    const name = event.target.value;
    const nameError = this.validateName(name);
    this.updateFieldAndError('name', name, nameError);
  }

  changeAcceleration = (event) => {
    const acceleration = parseFloat(event.target.value);
    const accelerationError = this.validateNumber(acceleration, 1, 100);
    this.updateFieldAndError('acceleration', acceleration, accelerationError);
  }

  changeHorsepower = (event) => {
    const horsepower = parseFloat(event.target.value);
    const horsepowerError = this.validateNumber(horsepower, 30, 800);
    this.updateFieldAndError('horsepower', horsepower, horsepowerError);
  }

  changeYear = (event) => {
    const year = parseFloat(event.target.value);
    const yearError = this.validateNumber(year, 0, 99);
    this.updateFieldAndError('year', year, yearError);
  }

  validateName = (name) => {
    if (!name.length) {
      return 'Name is mandatory';
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
    return (
      <CarFormPresentation
        {...this.state}
        changeHandlers={{
          name: this.changeName,
          acceleration: this.changeAcceleration,
          horsepower: this.changeHorsepower,
          year: this.changeYear,
        }}
        onSubmit={this.submit}
        onCancel={this.props.onCancel}
      />
    );
  }
}

CarForm.propTypes = {
  car: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarForm.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {}
};

export default CarForm;
