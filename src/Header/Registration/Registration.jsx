import React from "react";



export class Registration extends React.Component {

  onClick = event => {
    event.preventDefault();    
    this.props.navigateTo('map');    
  }

  render() {
    return <>
      <form>
        <div>
          <div>
            <h1>Registration</h1>
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
          <label htmlFor="firstName">
            FirstName:
          <input
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
          <input
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
          <input 
            id="password" 
            type="password" 
            name="password" 
            size="28"
          />
        </label>
        </div>
          <input 
            onClick={this.onClick} 
            type="submit" 
            value="Submit" 
          />
        </div>
      </form>
    </>
  }
};

export default Registration;