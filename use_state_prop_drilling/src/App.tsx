import React from 'react';
import logo from './logo.svg';
import './App.css';

import Parent from './components/Parent'

function App() {
  return (
    <div className="App">
      <h1> THIS THE EXERCISE TO USE USESTATE HOOK AND PROP DRILLING</h1>
      
      <Parent counter = {0}/>

    </div>
  );
}

export default App;
