import React from 'react';
import { withAuth } from '../Authorization/Authorization';
import {PropTypes} from 'prop-types';



export class Login extends React.Component {

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate('profile');
  };
 
  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <div>
              <h1>Login</h1>
            </div>
            <div>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  type="email"
                  name="email"
                  size="28"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  id="password"
                  type="password"
                  name="password"
                  size="28"
                />
              </label>
            </div>
            <div>
              <label htmlFor="registration">
                New login:
              </label>
              <button
                type="registration"
                value="Registration">
                Registration
              </button>
            </div>
            <div>
              <input
                type="submit"
                value="Submit">
              </input>
            </div>
          </form>
        )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login)


