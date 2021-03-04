import React from 'react'
import { withAuth } from '../Authorization/Authorization';



export class Login extends React.Component {

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate('profile');
  };
 
  // onClick = event => {
  //   event.preventDefault();
  //   this.props.navigateTo('map');
  // }

  // onClickRegistration = event => {
  //   event.preventDefault();
  //   this.props.navigateTo('registration');
  // }

  //state = { email: ``, password: `` };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.email);
  //   console.log(this.state.password);
  // }

  // handlEmailChange = event => {
  //   this.setState({ email: event.target.value });
  // };

  // handlePasswordChange = event => {
  //   this.setState({ password: event.target.value });
  // };

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    // const { email, password } = this.state;
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
                  //value={email}
                  // onChange={this.handlEmailChange}
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
                  // value={password}
                  // onChange={this.handlePasswordChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="registration">
                New login:
              </label>
              <button
                //onClick={this.onClickRegistration}
                type="registration"
                value="Registration">
                Registration
              </button>
            </div>
            <div>
              <input
                //onClick={this.onClick}
                type="submit"
                value="Submit">
              </input>
            </div>
          </form>
        )}
      </>
    );
  }
};

export default Login;

export const LoginWithAuth = withAuth(Login)


