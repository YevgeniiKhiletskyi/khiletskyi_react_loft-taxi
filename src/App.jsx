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

// const stylesBackground = {
//   bacground: 
// }

class App extends React.Component {

  state = { page: 'login' }

  navigateTo = (name) => {
    if (this.props.isLoggedIn || name === 'login' || name === 'registration') {
      this.setState({ page: name });
    }

  };


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
                <Button
                  variant="text"
                  color="primary"
                  onClick={this.navigateTo.bind(this, 'map')}>
                  Map
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  color="primary"
                  onClick={this.navigateTo.bind(this, 'profile')}>
                  Profile
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  color="primary"
                  onClick={this.navigateTo.bind(this, 'login')}>
                  Login
                </Button>
              </li>
            </ul>
          </nav>
        </header >
        <main>
          
            {PAGES[this.state.page]({ navigate: this.navigateTo })}
         
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
