import React from 'react';
import { shallow } from 'enzyme';

import CarFormPresentation from './CarFormPresentation';

import model from '../../model';

describe('CarFormPresentation', function () {
  it('renders correctly', function () {
    const onChangeField = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarFormPresentation
        car={{
          name: 'Audi',
          acceleration: 12,
        }}
        model={model}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with field errors but cannot submit', function () {
    const onChangeField = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarFormPresentation
        car={{
          name: 'Audi',
          acceleration: 12,
        }}
        errors={{
          name: 'Not a good name',
          acceleration: 'This car sucks',
        }}
        model={model}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.find('[type="submit"]').simulate('click');

    // submit button should be disabled in this case
    expect(onSubmit).not.toBeCalled();
  });


  it('fires the handlers passed in props', function () {
    const onChangeField = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <CarFormPresentation
        car={{
          name: 'Audi',
          acceleration: 12,
        }}
        model={model}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );

    wrapper.find('input[name="acceleration"]').simulate('change', { target: { value: 3 } });
    expect(onChangeField).toBeCalledWith('acceleration', 3);

    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'VW' } });
    expect(onChangeField).toBeCalledWith('name', 'VW');

    wrapper.find('button[name="cancel"]').simulate('click');
    expect(onCancel).toBeCalled();

    wrapper.find('form').simulate('submit');
    expect(onSubmit).toBeCalled();
  });
});
