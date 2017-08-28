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

export default model;
