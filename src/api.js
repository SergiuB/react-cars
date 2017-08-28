const SERVER_URL = 'http://localhost';
const FIRST_PAGE = '/api/v1/car/?format=json';

const fullUrl = pathToResource => `${SERVER_URL}${pathToResource}`;

const getCars = (url = fullUrl(FIRST_PAGE)) =>
  fetch(url)
    .then(r => r.json())
    .then(({ meta, objects }) => ({
      cars: objects,
      nextCarUrl: meta.next && fullUrl(meta.next),
      prevCarUrl: meta.previous && fullUrl(meta.previous),
      currentCarUrl: url,
    }));

const saveCar = (car) => {
  const { id, resource_uri, ...other } = car;
  return fetch(fullUrl(resource_uri), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(other),
  });
};

const api = {
  getCars,
  saveCar,
};

export default api;
