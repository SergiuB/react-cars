import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CarTablePage from '../CarTablePage';
import PageNavigation from '../PageNavigation';
import serverApi from '../../api';

const tapLog = x => { console.log(x); return x; }

export class CarTable extends Component {
  state = {
    cars: [],
    currentCarUrl: null,
    nextCarUrl: null,
    prevCarUrl: null,
    editingCardId: -1,
  }

  componentWillMount() {
    this.updateState(this.state.currentCarUrl);
  }

  getNextCars = () => this.updateState(this.state.nextCarUrl);

  getPrevCars = () => this.updateState(this.state.prevCarUrl);

  updateState = carUrl => this.props.api.getCars(carUrl)
    .then(s => this.setState(s))

  handleRowClick = cardId =>
    this.setState({ editingCardId: (cardId === this.state.editingCardId) ? -1 : cardId })

  render() {
    const {
      cars,
      editingCardId,
      nextCarUrl,
      prevCarUrl,
    } = this.state;

    return (
      <div className='car-table'>
        <CarTablePage
          cars={cars}
          editingCardId={editingCardId}
          onRowClick={this.handleRowClick}
        />
        <PageNavigation
          nextEnabled={!!nextCarUrl}
          prevEnabled={!!prevCarUrl}
          onNext={this.getNextCars}
          onPrev={this.getPrevCars}
        />
      </div>
    );
  }
}

CarTable.propTypes = {
  api: PropTypes.shape({
    getCars: PropTypes.func,
    saveCar: PropTypes.func,
  }).isRequired,
};

const withApi = (comp, api) => props =>
  <CarTable {...props} api={api} />;

export default withApi(CarTable, serverApi);
