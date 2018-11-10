import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchStationsByUserId} from '../store';
import {StationCard} from './index';

/* CONTAINER */
const mapState = state => {
  return {
    user: state.user,
    stationsByUser: state.stationsByUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleStationsByUser(id) {
      dispatch(fetchStationsByUserId(id));
    }
  };
};

export class MyStations extends Component {
  componentDidMount() {
    const userId = this.props.user.id;
    this.props.handleStationsByUser(userId);
  }

  render() {
    const stations = this.props.stationsByUser;
    return (
      <div className="myStations full-height">
        <h1 className="margin-top white-font">
          {stations.length ? 'My Stations' : 'No stations yet!'}
        </h1>
        <div>
          {stations && stations.map(station => {
            return <StationCard key={station.id} station={station} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatchToProps)(MyStations);
