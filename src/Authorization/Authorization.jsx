import React from 'react'

export const Authorization = React.createContext()

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const logIn = (email, password) => {
    if(email !== 'valid@email.com' || password !== 'correctpassword') {
      return
    }

    setIsLoggedIn(true)
  };

  const logOut = () => {
    setIsLoggedIn(false)
  };

  return (
    <Authorization.Provider value={{logIn, logOut, isLoggedIn}}>
      {children}
    </Authorization.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return ( 
        <Authorization.Consumer>
          {
            (value) => {
              return <WrappedComponent {...value} {...this.props} />
            }
          }
        </Authorization.Consumer>
      );
    }
  };
};