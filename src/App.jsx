import React from "react";
import {Map} from './Header/Map/Map';
import {Profile} from './Header/Profile/Profile';
import {Login} from './Header/Login/Login';
import {Registration} from './Header/Registration/Registration';
import './App.css';

// const PAGES = {
//   map: <Map/>,
//   profile: <Profile/>,
//   login: <Login/>,
//   registration: <Registration/>,
// }

class App extends React.Component {

  state = { page: "home" }


  navigateTo = (name) => {
    this.setState({ page: name });
  };

  render() {
    return <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => {this.navigateTo("map")}}>
                Map
              </button>
            </li>
            <li>
              <button onClick={() => {this.navigateTo("profile")}}>
                Profile
              </button>
            </li>
            <li>
              <button onClick={() => {this.navigateTo("login")}}>
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {this.state.page === 'map' && <Map />}
          {this.state.page === 'profile' && <Profile />}
          {this.state.page === 'login' && <Login navigateTo={this.navigateTo} />}
          {this.state.page === 'registration' && <Registration navigateTo={this.navigateTo} />} 
          {/* {PAGES[this.state.page]} */}
        </section>
      </main>
    </>
  }
}

export default App;
