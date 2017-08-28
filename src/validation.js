const validateString = (str) => {
  if (!str.length) {
    return 'Value is mandatory';
  }
  return '';
};

const validateNumber = (n, min, max) => {
  if (isNaN(n) || !isFinite(n)) {
    return 'Invalid number';
  }
  if (n < min) {
    return `Value must be greater than ${min}`;
  }
  if (n > max) {
    return `Value must be lower than or equal to ${max}`;
  }
  return '';
};

const validateField = (fieldValue, fieldDef) => {
  switch (fieldDef.type) {
    case 'string':
      return validateString(fieldValue);
    case 'number':
      return validateNumber(fieldValue, fieldDef.min, fieldDef.max);
    default:
      throw new Error('unsupported');
  }
};

export default validateField;
