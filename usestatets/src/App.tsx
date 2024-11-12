import React, { useState } from 'react';
import './App.css';

//typescript type is imported to work with eventypes
import { ChangeEvent } from 'react';

//interface is written with Capital letter
interface UserInput{
  user: string, 
  pass: string
}

function App() {

  const [userInput, setUserInput] = useState<UserInput>({user:"username", pass:"123214"})

  //event типа ChangeEvent c подтипом Input
  function setUserName(e: ChangeEvent<HTMLInputElement>){
    //the function get the current state of the input
    // by spreading the current state and replaces with the new user input
    setUserInput({...userInput, user: e.target.value})
  } 

  // this is for testing
  // console.log(userInput)


  function setUserPass(e: ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, pass: e.target.value})
  }


  return (
    //create User password form
    <div className="App">
      <h3>User</h3>
      {/* если навести на е в функции то можно увидеть тип,
       это как подсказка для правильной типизации  event */}
      <input type="text" onChange={(e) => setUserName(e)} />
      <h3>Password</h3>
      <input type="text" onChange={(e) => setUserPass(e) }/>
    </div>
  );
}

export default App;
