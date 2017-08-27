import React from 'react';
import { shallow } from 'enzyme';

import CarRow from './CarRow';

const carData = {
  id: 1,
  name: 'Audi',
  acceleration: 12,
};

describe('CarRow', function () {
  it('renders correctly', function () {
    const wrapper = shallow(
      <CarRow car={carData} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly in edit mode', function () {
    const wrapper = shallow(
      <CarRow car={carData} editEnabled />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('fires onClick when row is clicked', function () {
    const onClick = jest.fn();
    const wrapper = shallow(
      <CarRow car={carData} onClick={onClick} />
    );
    wrapper.find('tr').simulate('click');
    expect(onClick).toBeCalled();
  });
});
