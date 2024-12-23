import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/typed_hooks'
// import in curly braces, without them there may be error:
import { userSlice } from './store/reducers/userSlice';
import { fetсhUsers } from './store/reducers/ActionCreators';

function App() {

  //const {} = useSelector(state=>state.)
  //при использовании стандартного хука не знаем какие здесь есть поля 

  //типизированный редьюсер имеет поля.
  //const {} = useAppSelector(state=>state )



  //диспатч для внедрения изменений
  const dispatch = useAppDispatch()

  //payload - это, то значение, которое подается в функцию
  // console.log(increment(10))


  //getting array
   const {users, isLoading, error} = useAppSelector(state=>state.userReducer )

   useEffect( 
    ()=>{
      // в основной компонент подаем все диспатчи в одной функции
      dispatch(fetсhUsers())
      // зависимость нужна чтобы у нас отрисовка была один раз только
   }, []

   )


    //console.log(users)

  return (
    <div className="App">
      <header>
        Redux Toolkit with TS in React
      </header>
      {isLoading && <h1>Data is loading ...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}

    </div>
  );
}

export default App;
