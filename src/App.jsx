import React from "react";
import './App.css';
import { Map } from './Map/Map';
import { ProfileWithAuth } from './Profile/Profile';
import { LoginWithAuth } from './Login/Login';
import { RegistrationWithAuth } from './Registration/Registration';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";


class App extends React.Component {


  render() {
    
    return (
      <>
        <header>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <nav>
            <ul>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header >
        <main>
          <Switch>
            <PrivateRoute exact path="/map" component={Map} />
            <PrivateRoute exact path="/profile" component={ProfileWithAuth} />
            <Route exact path="/login" component={LoginWithAuth} />
            <Route exact path="/registration" component={RegistrationWithAuth} />
          </Switch>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
