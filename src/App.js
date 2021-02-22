import React from "react";
import {Map} from './Header/Map/Map';
import {Profile} from './Header/Profile/Profile';
import {Login} from './Header/Login/Login';
import './App.css';

const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  login: <Login/>,

}

class App extends React.Component {

  state = { curentPage: "home" }

  navigateTo = (page) => {
    this.setState({ curentPage: page });
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
          {PAGES[this.state.curentPage]}
        </section>
      </main>
    </>
  }
}

export default App;
