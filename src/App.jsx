import React from "react";
import { Map } from './Map/Map';
import { ProfileWithAuth } from './Profile/Profile';
import { LoginWithAuth } from './Login/Login';
import { RegistrationWithAuth } from './Registration/Registration';
import {withAuth} from './Authorization/Authorization';
import './App.css';

 const PAGES = {
   map: (props) => <Map {...props} />,
   profile: (props) => <ProfileWithAuth {...props} />,
   login: (props) => <LoginWithAuth {...props} />,
   registration: (props) => <RegistrationWithAuth {...props} />,
};

class App extends React.Component {

  state = { page: "login" }


  navigateTo = (name) => {
    if (this.props.isLoggedIn) {
      this.setState({ page: name });
    }else {
      this.setState({ page: 'login' });
    }
  };

  render() {
    return <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => { this.navigateTo("map") }}>
                Map
            </button>
            </li>
            <li>
              <button onClick={() => { this.navigateTo("profile") }}>
                Profile
            </button>
            </li>
            <li>
              <button onClick={() => { this.navigateTo("login") }}>
                Login
            </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {/* {this.state.page === 'map' && <Map />}
          {this.state.page === 'profile' && <Profile />}
          {this.state.page === 'login' && <LoginWithAuth navigateTo={this.navigateTo} />}
          {this.state.page === 'registration' && <Registration navigateTo={this.navigateTo} />} */}
          {PAGES[this.state.page]({navigate: this.navigateTo})}
        </section>
      </main>
    </>
  }
}

export default withAuth(App);
