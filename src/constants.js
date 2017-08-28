import PropTypes from 'prop-types';

const carShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  acceleration: PropTypes.number,
});

const NONE = -1;

export {
  NONE,
  carShape,
};
