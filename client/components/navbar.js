import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import { Menu, Segment} from 'semantic-ui-react';

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <div>
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to="/" name="Home" />
        <Menu.Item as={Link} to="/all-stations" name="All Stations" />
        <Menu.Item as={Link} to="/all-broadcasts" name="All Broadcasts" />
        {isLoggedIn ?
          <div className="flex">
            <Menu.Item as={Link} to="/myStations" name="My Stations" />
            <Menu.Item as={Link} to="/new-station" name="Create a New Station" />
            <Menu.Item name="Logout" onClick={handleClick} />
            <Menu.Item as={Link} to="/myAccount" name="My Account" />
          </div> :
          <div className="flex">
            <Menu.Item as={Link} to="/login" name="login" />
            <Menu.Item as={Link} to="/signup" name="Sign up" />
          </div>}
        </Menu>
      </Segment>
    </div>
  );
};

/*CONTAINER*/
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    broadcasts: state.broadcasts
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/*PROP TYPES*/
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
