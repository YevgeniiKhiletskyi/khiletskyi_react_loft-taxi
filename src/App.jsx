import React from "react";
import { Map } from './Map/Map';
import { ProfileWithAuth } from './Profile/Profile';
import { LoginWithAuth } from './Login/Login';
import { RegistrationWithAuth } from './Registration/Registration';
import { withAuth } from './Authorization/Authorization';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";


import './App.css';

const PAGES = {
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  login: (props) => <LoginWithAuth {...props} />,
  registration: (props) => <RegistrationWithAuth {...props} />,
};


class App extends React.Component {

  state = { page: 'login' }

  navigateTo = (name) => {
    if (this.props.isLoggedIn) {
      this.setState({ page: name });
    } else {
      this.setState({ page: 'login' });
    }
  };


  render() {
    const styles = {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 38,
      //padding: '0 30px',
    };
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Button 
                  style={styles}
                  onClick={() => { this.navigateTo('map') }}>
                  Map
                </Button>
              </li>
              <li>
                <Button
                  style={styles}
                  onClick={() => { this.navigateTo('profile') }}>
                  Profile
                </Button>
              </li>
              <li>
                <Button 
                  style={styles} 
                  onClick={() => { this.navigateTo('login') }}>
                  Login
            </Button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.page]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
