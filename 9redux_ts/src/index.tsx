import React from 'react';
// import ReactDOM from 'react-dom/client'; (this is available in React 18 only), we are in React17
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store';

//This is the version of React 18
/* 
const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
 );
 root.render(
   <Provider store={store}>
     <App />
   </Provider>
 );
*/



// React 17: Use ReactDOM.render() to render the app
ReactDOM.render(
    <Provider store={store}>
     <App />
   </Provider>,
  document.getElementById('root')  // Target the root element in your HTML
);