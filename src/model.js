import PropTypes from 'prop-types';

const model = {
  name: {
    type: 'string',
  },
  acceleration: {
    type: 'number',
    min: 1,
    max: 100,
    step: 0.1,
  },
  cylinders: {
    type: 'number',
    min: 2,
    max: 16,
    step: 1,
  },
  displacement: {
    type: 'number',
    min: 1,
    max: 1000,
    step: 1,
  },
  horsepower: {
    type: 'number',
    min: 40,
    max: 1000,
    step: 1,
  },
  mpg: {
    type: 'number',
    min: 0,
    max: 100,
    step: 1,
  },
  weight: {
    type: 'number',
    min: 500,
    max: 10000,
    step: 1,
  },
  year: {
    type: 'number',
    min: 0,
    max: 99,
    step: 1,
  },
};


const carShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  acceleration: PropTypes.number,
  cylinders: PropTypes.number,
  displacement: PropTypes.number,
  horsepower: PropTypes.number,
  mpg: PropTypes.number,
  weight: PropTypes.number,
  year: PropTypes.number,
});

const fieldShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
});

const modelShape = PropTypes.shape({
  name: fieldShape,
  acceleration: fieldShape,
  cylinders: fieldShape,
  displacement: fieldShape,
  horsepower: fieldShape,
  mpg: fieldShape,
  weight: fieldShape,
  year: fieldShape,
});

export {
  carShape,
  modelShape,
};

export default model;
