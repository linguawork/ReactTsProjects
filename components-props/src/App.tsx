import React from 'react';

import './App.css';


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


type AnotherWayOfProps= {
  videoname: string, 
  videonumber: number

}

function NewComponent({videoname, videonumber}: AnotherWayOfProps){

  return (
  <div>
        <h2>AnotherVideo :{videoname}</h2>
      <h2>Another link :{videonumber} </h2>
  </div>


    

  )
  

}




function App() {
  return (
    <div className='app'>

      <h1 className='header1'>
        Test!
      </h1>
      <a href="https://www.youtube.com/watch?v=XxV395LzRTk">React.FC</a>
      <br/>
      <a href="https://www.youtube.com/watch?v=WhpdzVnuofI&list=PLYlfM6qKBI5gHd6qevYUWQfL-TAWp5NW6&index=3">Props in ReactTs</a>
  
      {/* the first component */}
        <Card personName="Darwin"/>

      {/* the second component */}
        <NewComponent videoname='another video' videonumber={11} />
    </div>

  );
}

export default App;
