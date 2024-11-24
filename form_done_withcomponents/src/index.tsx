import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


/* preproc JSX (babel transforms JSX into js with the 
 help of React, so it should be imported )

 if the elem can be written in one line, no round brackets needed
 However, if there are more than 1 line we need round brackets
*/


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//deleted ReactStrictMode
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
