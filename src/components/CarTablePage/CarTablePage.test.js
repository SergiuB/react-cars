import React from 'react';
import { shallow } from 'enzyme';

import CarTablePage from './CarTablePage';

const cars = [{
  id: 1,
  name: 'Audi',
  acceleration: 12,
}, {
  id: 2,
  name: 'VW',
  acceleration: 18,
}];

describe('CarTablePage', function () {
  it('renders correctly with no edited car', function () {
    const wrapper = shallow(
      <CarTablePage
        cars={cars}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('CarRow')).toHaveLength(2);
    expect(wrapper.find('CarFormRow')).toHaveLength(0);
  });

  it('renders correctly with first car in edit mode', function () {
    const wrapper = shallow(
      <CarTablePage
        cars={cars}
        editingCarId={1}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('CarRow')).toHaveLength(2);
    expect(wrapper.find('CarFormRow').prop('car').id).toEqual(1);
  });

  it('renders correctly with last car in edit mode', function () {
    const wrapper = shallow(
      <CarTablePage
        cars={cars}
        editingCarId={2}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('CarRow')).toHaveLength(2);
    expect(wrapper.find('CarFormRow').prop('car').id).toEqual(2);
  });

  it('renders correctly with invalid editingCarId', function () {
    const wrapper = shallow(
      <CarTablePage
        cars={cars}
        editingCarId={100}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('CarRow')).toHaveLength(2);
    expect(wrapper.find('CarFormRow')).toHaveLength(0);
  });

  it('fires onRowClick with the car id as argument when row is clicked', function () {
    const onRowClick = jest.fn();
    const wrapper = shallow(
      <CarTablePage
        cars={cars}
        onRowClick={onRowClick}
      />
    );
    // click on the 2nd row on the first page
    wrapper.find('CarRow').at(1).prop('onClick')();
    expect(onRowClick).toBeCalledWith(2);
  });
});
