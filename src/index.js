import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'babel-preset-env';
import 'core-js';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import 'core-js/es/reflect';
import 'core-js/es/array';
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/set';
import 'proxy-polyfill';
import 'react-waypoint'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { CookiesProvider } from 'react-cookie'
import { polyfillClosestAndRemove } from './polyfills'
import './index.css';
import App from './containers/App';
import store from './redux/store';
// import actionCable from 'actioncable'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-3121010-1', {debug: false})
ReactGA.pageview(window.location.pathname + window.location.search)

const CableApp = {}

const BASE_URL = process.env.REACT_APP_BASE_URL

// CableApp.cable = actionCable.createConsumer(`${BASE_URL}/cable`)
//must switch to ws://localhost:3001/cable in development ws://gabellidotcom-api/cable

polyfillClosestAndRemove()

// for Ally testing
// if (process.env.NODE_ENV !== 'production') {
//   var axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// ReactDOM.render(
//     <CookiesProvider>
//       <Provider store={store}>
//         <App cableApp={CableApp}/>
//       </Provider>
//     </CookiesProvider>,
//   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
