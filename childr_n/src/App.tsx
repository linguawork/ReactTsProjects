import React from 'react';
import './App.css';
import ForChildren from './components/ForChildren';

function App() {
  return (
    <div className="App">
      <h1>Children practice</h1>
       <ForChildren name = "name">
          {/* the contents betweent the opening and closing tags
          are called children. Here is the <p> element */}
          <p>This is a children line</p>
        </ForChildren> 
    </div>
  );
}

export default App;
