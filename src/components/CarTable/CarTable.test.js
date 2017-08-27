import React from 'react';
import { shallow } from 'enzyme';

import { CarTable } from './CarTable';

import CarTablePage from '../CarTablePage';
import PageNavigation from '../PageNavigation';

const cars = {
  page1: {
    prevCarUrl: null,
    nextCarUrl: 'page2',
    cars: [{
      id: 1,
      acceleration: 12,
      name: 'Car1',
    }, {
      id: 2,
      acceleration: 15,
      name: 'Car2',
    }]
  },
  page2: {
    prevCarUrl: 'page1',
    nextCarUrl: 'page3',
    cars: [{
      id: 3,
      acceleration: 3,
      name: 'Car3',
    }, {
      id: 4,
      acceleration: 6,
      name: 'Car4',
    }]
  },
  page3: {
    prevCarUrl: 'page2',
    nextCarUrl: null,
    cars: [{
      id: 5,
      acceleration: 36,
      name: 'Car5',
    }]
  }
};

const api = {
  getCars: url => ({
    then: (f) => {
      f(url ? cars[url] : cars.page1);
    }
  }),
  saveCar: (car) => {
    const p = Promise.resolve();
    switch (car.id) {
      case 1:
        cars.page1[0] = { ...car };
        return p;
      case 2:
        cars.page1[1] = { ...car };
        return p;
      case 3:
        cars.page2[0] = { ...car };
        return p;
      case 4:
        cars.page2[1] = { ...car };
        return p;
      case 5:
        cars.page3[0] = { ...car };
        return p;
      default:
        return p;
    }
  }
};

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
    expect(wrapper.find(CarTablePage).prop('editingCardId')).toEqual(2);
  });

  it('resets the currently edited car id if a row header is clicked twice', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onRowClick')(2);
    expect(wrapper.find(CarTablePage).prop('editingCardId')).toEqual(-1);
  });

  it('updates the currently edited car id if another clicked row header', function () {
    const wrapper = shallow(
      <CarTable
        api={api}
      />
    );

    wrapper.find(CarTablePage).prop('onRowClick')(2);
    wrapper.find(CarTablePage).prop('onRowClick')(1);
    expect(wrapper.find(CarTablePage).prop('editingCardId')).toEqual(1);
  });
});
