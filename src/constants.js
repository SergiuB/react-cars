import PropTypes from 'prop-types';

const NONE = -1;

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

const errorsShape = PropTypes.shape({
  name: PropTypes.string,
  acceleration: PropTypes.string,
  cylinders: PropTypes.string,
  displacement: PropTypes.string,
  horsepower: PropTypes.string,
  mpg: PropTypes.string,
  weight: PropTypes.string,
  year: PropTypes.string,
});

export {
  NONE,
  carShape,
  modelShape,
  errorsShape,
};
