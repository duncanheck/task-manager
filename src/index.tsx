import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Auth0Provider
    domain="dev-udcapzmz7df4j6s3.us.auth0.com"
    clientId="P9qzTKbhL6jkPhc1c2TVNHAVqrO2STjp"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
