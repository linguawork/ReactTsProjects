import React from 'react';

// import './App.css';


//variant 3
interface Name {
  personName:string
}


//variant2
// type Name = {
//   personName:string
// }

function Card({personName}:Name){
  return <h1>{personName}</h1>
  
}

//variant 1
// function Card({personName}:{personName:string}){
//   return <h1>{personName}</h1>
  
// }


function App() {
  return (
    <div>

        <h1>
          Test!
        </h1>

    <Card personName="Darwin"/>
    </div>

  );
}

export default App;
