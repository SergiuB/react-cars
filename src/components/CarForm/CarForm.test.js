import React from 'react';
import { shallow } from 'enzyme';

import CarForm from './CarForm';

describe('CarForm', function () {
  it('renders correctly', function () {
    const wrapper = shallow(
      <CarForm
        id={1}
        name='Audi'
        acceleration={12}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('updates props in response to change handlers', function () {
    const wrapper = shallow(
      <CarForm
        id={1}
        name='Audi'
        acceleration={12}
      />
    );

    wrapper.prop('onChangeAcceleration')({ target: { value: 3 } });
    expect(wrapper.prop('acceleration')).toEqual(3);

    wrapper.prop('onChangeName')({ target: { value: 'VW' } });
    expect(wrapper.prop('name')).toEqual('VW');
  });

  it('updates error props in response to setting invalid values', function () {
    const wrapper = shallow(
      <CarForm
        id={1}
        name='Audi'
        acceleration={12}
      />
    );

    wrapper.prop('onChangeAcceleration')({ target: { value: NaN } });
    expect(wrapper.prop('accelerationError')).toEqual('Invalid number');

    wrapper.prop('onChangeName')({ target: { value: '' } });
    expect(wrapper.prop('nameError')).toEqual('Name is mandatory');
  });

  it('calls onSubmit with the changed values', function () {
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CarForm
        id={1}
        name='Audi'
        acceleration={12}
        onSubmit={onSubmit}
      />
    );

    wrapper.prop('onChangeAcceleration')({ target: { value: 10 } });
    wrapper.prop('onChangeName')({ target: { value: 'VW' } });

    wrapper.prop('onSubmit')({ preventDefault() {} });

    expect(onSubmit).toBeCalledWith({ id: 1, acceleration: 10, name: 'VW' });
  });

  it('calls onCancel', function () {
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarForm
        id={1}
        name='Audi'
        acceleration={12}
        onCancel={onCancel}
      />
    );

    wrapper.prop('onCancel')();
    expect(onCancel).toBeCalled();
  });
});
