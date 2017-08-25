import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CarFormPresentation from './CarFormPresentation';

describe("A suite", function() {
  it("renders correctly", function() {
    const onChangeName = jest.fn();
    const onChangeAcceleration = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
        <CarFormPresentation
          name='Audi'
          acceleration={12}
          onChangeName={onChangeName}
          onChangeAcceleration={onChangeAcceleration}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with field errors but cannot submit", function() {
    const onChangeName = jest.fn();
    const onChangeAcceleration = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
        <CarFormPresentation
          name='Audi'
          nameError='Not a good name'
          acceleration={12}
          accelerationError='This car sucks'
          onChangeName={onChangeName}
          onChangeAcceleration={onChangeAcceleration}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.find('[type="submit"]').simulate('click');

    // submit button should be disabled in this case
    expect(onSubmit).not.toBeCalled();
  });


  it("fires the handlers passed in props", function() {
    const onChangeName = jest.fn();
    const onChangeAcceleration = jest.fn();
    const onSubmit = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
        <CarFormPresentation
          name='Audi'
          acceleration={12}
          onChangeName={onChangeName}
          onChangeAcceleration={onChangeAcceleration}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
    );
    
    wrapper.find('input[name="acceleration"]').simulate('change', { target: { value: 3 } });
    expect(onChangeAcceleration).toBeCalledWith( { target: { value: 3 } });
    
    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'VW' } });
    expect(onChangeName).toBeCalledWith( { target: { value: 'VW' } });

    wrapper.find('button[name="cancel"]').simulate('click');
    expect(onCancel).toBeCalled();

    wrapper.find('form').simulate('submit');
    expect(onSubmit).toBeCalled();
  });
});