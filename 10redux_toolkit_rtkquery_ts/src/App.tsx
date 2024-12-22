import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/typed_hooks'
// import in curly braces, without them there may be error:
import { userSlice } from './store/reducers/userSlice';

function App() {

  //const {} = useSelector(state=>state.)
  //при использовании стандартного хука не знаем какие здесь есть поля 

  //типизированный редьюсер имеет поля.
  //const {} = useAppSelector(state=>state )



  //диспатч для внедрения изменеий
  const dispatch = useAppDispatch()

  //payload - это, то значение, которое подается в функцию
  // console.log(increment(10))

  return (
    <div className="App">
      <header>
        Redux Toolkit with TS in React
      </header>

    </div>
  );
}

export default App;
