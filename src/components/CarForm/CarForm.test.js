import React from 'react';
import { shallow } from 'enzyme';

import CarForm from './CarForm';

const carData = {
  id: 1,
  name: 'Audi',
  acceleration: 12,
};

describe('CarForm', function () {
  it('renders correctly', function () {
    const wrapper = shallow(
      <CarForm car={carData} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('updates props in response to change handlers', function () {
    const wrapper = shallow(
      <CarForm car={carData} />
    );

    wrapper.prop('changeHandlers').acceleration({ target: { value: 3 } });
    expect(wrapper.prop('car').acceleration).toEqual(3);

    wrapper.prop('changeHandlers').name({ target: { value: 'VW' } });
    expect(wrapper.prop('car').name).toEqual('VW');
  });

  it('updates error props in response to setting invalid values', function () {
    const wrapper = shallow(
      <CarForm car={carData} />
    );

    wrapper.prop('changeHandlers').acceleration({ target: { value: NaN } });
    expect(wrapper.prop('errors').acceleration).toEqual('Invalid number');

    wrapper.prop('changeHandlers').name({ target: { value: '' } });
    expect(wrapper.prop('errors').name).toEqual('Name is mandatory');
  });

  it('calls onSubmit with the changed values', function () {
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CarForm car={carData} onSubmit={onSubmit} />
    );

    wrapper.prop('changeHandlers').acceleration({ target: { value: 10 } });
    wrapper.prop('changeHandlers').name({ target: { value: 'VW' } });

    wrapper.prop('onSubmit')({ preventDefault() {} });

    expect(onSubmit).toBeCalledWith({ id: 1, acceleration: 10, name: 'VW' });
  });

  it('calls onCancel', function () {
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarForm car={carData} onCancel={onCancel} />
    );

    wrapper.prop('onCancel')();
    expect(onCancel).toBeCalled();
  });
});
