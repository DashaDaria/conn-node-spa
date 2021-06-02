import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain="june-tester.us.auth0.com"
    clientId="nZvEKPay120CV3J2GWVkn4wSCZ5Opz4j"
    redirectUri={window.location.origin}
  >
     <App />
  </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
