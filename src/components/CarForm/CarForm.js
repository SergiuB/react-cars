import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarFormPresentation from './CarFormPresentation';

class CarForm extends Component {
  constructor(props) {
    super(props);
    const {
      name,
      acceleration
    } = props;

    this.state = {
      name,
      acceleration
    };
  }

  changeName = (event) => {
    const name = event.target.value;
    const nameError = this.validateName(name);
    this.setState({ name, nameError });
  }

  validateName = (name) => {
    if (!name.length) {
      return 'Name is mandatory';
    }
    return '';
  }

  changeAcceleration = (event) => {
    const acceleration = parseInt(event.target.value, 10);
    const accelerationError = this.validateNumber(acceleration, 1, 100);
    this.setState({ acceleration, accelerationError });
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
    const {
      name,
      acceleration,
    } = this.state;

    const { id, onSubmit } = this.props;

    onSubmit({ id, name, acceleration });
    event.preventDefault();
  }

  render() {
    return (
      <CarFormPresentation
        {...this.state}
        onChangeName={this.changeName}
        onChangeAcceleration={this.changeAcceleration}
        onSubmit={this.submit}
        onCancel={this.props.onCancel}
      />
    );
  }
}

CarForm.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  acceleration: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CarForm.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {}
};

export default CarForm;
