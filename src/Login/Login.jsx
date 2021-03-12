import React from 'react';
//import { withAuth } from '../Authorization/Authorization';
import {connect} from 'react-redux';
import {logIn} from '../actions';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import styles from "../style";


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
   

    const { classes } = this.props;
    return (
      <>
      <section className={classes.section}>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in 
            <Button 
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={this.goToProfile}>
              go to profile
            </Button>
          </p>
        ) : (
            <form
              className={classes.form}
              onSubmit={this.authenticate}>
              <div>
                <h1>Sign in</h1>
              </div>
              <div>
                <label htmlFor="email">
                  Email:
                <Input
                  className={classes.input}
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
                <Input
                  className={classes.input}
                  id="password"
                  type="password"
                  name="password"
                  size="28"
                />
                </label>
              </div>
              <div>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  type="submit"
                  value="Sign in">
                  Sign in
                </Button>
              </div>
              <div>
                <label htmlFor="login">
                  New Login?
                </label>
                <Button
                  variant="text"
                  color="primary"
                  onClick={this.props.navigate.bind(this, 'registration')}
                  type="button"
                  value="Registration">
                    Registration
                </Button>
              </div>
            </form>
          )}
        </section>
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withStyles(styles)(connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {logIn} 
)(Login))


