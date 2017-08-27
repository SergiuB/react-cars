export const cars = {
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

export const api = {
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
