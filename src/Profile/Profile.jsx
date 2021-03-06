import React from 'react';
import { withAuth } from '../Authorization/Authorization';


export class Profile extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate('login');
  };

  render() {
    return (
      <>
        <h1>Profile</h1>
        <button onClick={this.unauthenticate}>Log out</button>
      </>
    );
  }
}

export const ProfileWithAuth = withAuth(Profile)