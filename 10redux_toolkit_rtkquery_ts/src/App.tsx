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

  //достаем нужную переменную в нужном редюсере
  const {count} = useAppSelector(state=>state.userReducer)

  //достаем функцию из редюсера (в Redux toolkit они называются Slice)
  const {increment} = userSlice.actions

  //диспатч для внедрения изменеий
  const dispatch = useAppDispatch()

  //payload - это, то значение, которое подается в функцию
  // console.log(increment(10))

  return (
    <div className="App">
      <header>
        Redux Toolkit with TS in React
      </header>
      <h1>{count}</h1>
      <button onClick={ () => dispatch(increment(10)) } >INCREMENT</button>
    </div>
  );
}

export default App;
