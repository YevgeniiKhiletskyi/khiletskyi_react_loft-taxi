import React from "react";
import {connect} from 'react-redux';
import {reg} from '../actions';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import styles from "../style";
import { Link } from "react-router-dom";


export class Registration extends React.Component {

  authenticate = (event) => {
    event.preventDefault()
    const { email, firstName, lastName, password } = event.target;
    this.props.reg(email.value, firstName.value, lastName.value, password.value);
  };

  render() {

    const { classes } = this.props;
    return (
      <>
        <section className={classes.section}>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in 
            <Link to="/profile">go to profile</Link>
          </p>
          ) : (
          <form
            className={classes.form}
            onSubmit={this.authenticate}>
            <div>
              <h1>Registration</h1>
            </div>
            <div>
              <label htmlFor="email">
                Email:
                <Input
                  id="email"
                  type="email"
                  name="email"
                  size="28"
                />
              </label>
            </div>
            <div>
              <label htmlFor="firstName">
                FirstName:
                <Input
                  id="firstName"
                  type="firstName"
                  name="firstName"
                  size="28"
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastName">
                LastName:
                <Input
                  id="lastName"
                  type="lastName"
                  name="lastName"
                  size="28"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <Input
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
                value="Registration">
                Registration
              </Button>
            </div>
            <div>
              <label htmlFor="login">
                Already Registered?
                </label>
                <Link to="/login"> Sign in</Link>
            </div>
          </form>
          )}
        </section>
      </>
    );
  }
};

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const RegistrationWithAuth = withStyles(styles)(connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {reg} 
)(Registration))