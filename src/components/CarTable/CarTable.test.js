import React from 'react';
import { shallow } from 'enzyme';

import CarTable from './CarTable';

import CarTablePage from '../CarTablePage';
import PageNavigation from '../PageNavigation';

import { cars, api } from './testUtils';

import { NONE } from '../../constants';

describe('CarTable', function () {
  it('renders correctly with the first page of cars', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CarTablePage).prop('cars')).toEqual(cars.page1.cars);
    expect(wrapper.find(PageNavigation).prop('nextEnabled')).toEqual(true);
    expect(wrapper.find(PageNavigation).prop('prevEnabled')).toEqual(false);
  });

  it('renders correctly with the 2nd page of cars', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(PageNavigation).prop('onNext')();
    expect(wrapper.find(CarTablePage).prop('cars')).toEqual(cars.page2.cars);
    expect(wrapper.find(PageNavigation).prop('nextEnabled')).toEqual(true);
    expect(wrapper.find(PageNavigation).prop('prevEnabled')).toEqual(true);
  });

  it('renders correctly with the last page of cars', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(PageNavigation).prop('onNext')();
    wrapper.find(PageNavigation).prop('onNext')();

    // after two next clicks we should be on page 3
    expect(wrapper.find(CarTablePage).prop('cars')).toEqual(cars.page3.cars);
    expect(wrapper.find(PageNavigation).prop('nextEnabled')).toEqual(false);
    expect(wrapper.find(PageNavigation).prop('prevEnabled')).toEqual(true);
  });

  it('sets the currently edited car id according to the clicked row header', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    expect(wrapper.find(CarTablePage).prop('editingCarId')).toEqual(2);
  });

  it('resets the currently edited car id if a row header is clicked twice', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onRowClick')(2);
    expect(wrapper.find(CarTablePage).prop('editingCarId')).toEqual(NONE);
  });

  it('updates the currently edited car id if another clicked row header', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onRowClick')(1);
    expect(wrapper.find(CarTablePage).prop('editingCarId')).toEqual(1);
  });

  it('saves the car changes and updates the list when a car is edited', function () {
    const updatedCar = { id: 2, name: 'Faster VW', acceleration: 5 };
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onSaveCarChanges')(updatedCar);

    // edit form is closed
    expect(wrapper.find(CarTablePage).prop('editingCarId')).toEqual(NONE);
    // second car in page is updated
    expect(wrapper.find(CarTablePage).prop('cars')[1]).toEqual(updatedCar);
  });

  it('sets editingCarId to none when onCancelCarChanges is called', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onCancelCarChanges')();

    // edit form is closed
    expect(wrapper.find(CarTablePage).prop('editingCarId')).toEqual(NONE);
  });
});
