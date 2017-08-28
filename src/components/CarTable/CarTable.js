import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CarTablePage from '../CarTablePage';
import PageNavigation from '../PageNavigation';
import { NONE } from '../../constants';

import './CarTable.css';

class CarTable extends Component {
  state = {
    cars: [],
    currentCarUrl: null,
    nextCarUrl: null,
    prevCarUrl: null,
    editingCarId: NONE,
  }

  componentWillMount() {
    this.updateState();
  }

  getNextCars = () => this.updateState(this.state.nextCarUrl, { editingCarId: NONE });

  getPrevCars = () => this.updateState(this.state.prevCarUrl, { editingCarId: NONE });

  updateState = (carUrl, stateToMerge) => this.props.api.getCars(carUrl)
    .then(s => this.setState({ ...s, ...stateToMerge }))

  handleRowClick = cardId =>
    this.setState({ editingCarId: (cardId === this.state.editingCarId) ? NONE : cardId })

  saveCarChanges = car =>
    this.props.api.saveCar(car)
      .then(() => this.updateState(this.state.currentCarUrl, { editingCarId: NONE }))

  cancelCarChanges = () => this.setState({ editingCarId: NONE })

  render() {
    const {
      cars,
      editingCarId,
      nextCarUrl,
      prevCarUrl,
    } = this.state;

    return (
      <div className='car-table'>
        <CarTablePage
          cars={cars}
          editingCarId={editingCarId}
          onRowClick={this.handleRowClick}
          onSaveCarChanges={this.saveCarChanges}
          onCancelCarChanges={this.cancelCarChanges}
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

export default CarTable;
