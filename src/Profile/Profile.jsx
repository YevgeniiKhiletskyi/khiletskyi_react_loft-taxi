import React from 'react';
//import { withAuth } from '../Authorization/Authorization';
import {connect} from 'react-redux';
import {logOut} from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import styles from "../style";

export class Profile extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate('login');
  };

  render() {

    const { classes } = this.props;
    return (
      <>
        <div className={classes.section}>
          <form
            className={classes.form}>
            <div>
              <h1>Profile</h1>
            </div>
            <Button 
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={this.unauthenticate}>
              Log out
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export const ProfileWithAuth = withStyles(styles)(connect(
  null,
  {logOut}
)(Profile))