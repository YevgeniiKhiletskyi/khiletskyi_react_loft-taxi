import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './Authorization/Authorization';
import { theme } from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
