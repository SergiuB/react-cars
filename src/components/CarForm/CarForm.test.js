import React from 'react';
import { shallow } from 'enzyme';

import CarForm from './CarForm';
import model from '../../model';

const carData = {
  id: 1,
  name: 'Audi',
  acceleration: 12,
};

describe('CarForm', function () {
  it('renders correctly', function () {
    const wrapper = shallow(
      <CarForm car={carData} model={model} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('updates props in response to change handlers', function () {
    const wrapper = shallow(
      <CarForm car={carData} model={model} />
    );

    wrapper.prop('onChangeField')('acceleration', 3);
    expect(wrapper.prop('car').acceleration).toEqual(3);

    wrapper.prop('onChangeField')('name', 'VW');
    expect(wrapper.prop('car').name).toEqual('VW');
  });

  it('updates error props in response to setting invalid values', function () {
    const wrapper = shallow(
      <CarForm car={carData} model={model} />
    );

    wrapper.prop('onChangeField')('acceleration', NaN);
    expect(wrapper.prop('errors').acceleration).toEqual('Invalid number');

    wrapper.prop('onChangeField')('mpg', -100);
    expect(wrapper.prop('errors').mpg).toEqual('Value must be greater than 1');

    wrapper.prop('onChangeField')('horsepower', 100000);
    expect(wrapper.prop('errors').horsepower).toEqual('Value must be lower than 101');

    wrapper.prop('onChangeField')('name', '');
    expect(wrapper.prop('errors').name).toEqual('Value is mandatory');
  });

  it('calls onSubmit with the changed values', function () {
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CarForm car={carData} model={model} onSubmit={onSubmit} />
    );

    wrapper.prop('onChangeField')('acceleration', 10);
    wrapper.prop('onChangeField')('name', 'VW');

    wrapper.prop('onSubmit')({ preventDefault() {} });

    expect(onSubmit).toBeCalledWith({ id: 1, acceleration: 10, name: 'VW' });
  });

  it('calls onCancel', function () {
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarForm car={carData} model={model} onCancel={onCancel} />
    );

    wrapper.prop('onCancel')();
    expect(onCancel).toBeCalled();
  });
});
