
import PropTypes from 'prop-types';

const carShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  acceleration: PropTypes.number,
});

export default carShape;
