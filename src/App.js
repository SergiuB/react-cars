import React from 'react';

import CarTable from './components/CarTable';
import api from './api';

const App = () => (
  <div className="App">
    <CarTable api={api} />
  </div>
);

export default App;
