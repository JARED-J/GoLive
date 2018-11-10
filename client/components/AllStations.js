import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStations } from '../store';
import { StationCard } from './index';

export class AllStations extends Component {
  componentDidMount() {
    this.props.loadStations();
  }

  render() {
    const {stations} = this.props;
    return (
      <div className="all-stations">
        <h1 id="all-stations-title">GoLive Stations</h1>
        <div className="all-cast-cards">
        {stations && stations.map(station => {
          return <StationCard key={station.id} station={station} />;
        })}
        </div>
      </div>
    )
  }
}

/* CONTAINER */
const mapState = state => ({
  stations: state.stations
});

const mapDispatch = dispatch => {
  return {
    loadStations: () => {
      dispatch(fetchStations());
    }
  };
};

export default connect(mapState, mapDispatch)(AllStations);
