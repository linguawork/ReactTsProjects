import { combineReducers, configureStore } from "@reduxjs/toolkit";

//так как экспорт был дефолтный то можно изменять имена при импорте
import  userReducer  from "./reducers/userSlice"; //importing without curly braces

/*
    В ReduxToolkit уже необязательно использовать rootReducer
    Вместо него можно использовать просто {}
*/
const rootReducer = combineReducers(
    {
        userReducer
    }
)

//это будет store в Provider
export const setupStore = () =>{
    /*
        обновленная функция createStore:
    */
    return configureStore(
        /*
            уже не нужно подключать devTools, middleware(thunk)
            они уже включены
        */
        //Ctrl+space inside obj 
        {
            //key: value, раньше просто писали rootReducer
            reducer: rootReducer
        }
    )
}


/*
    получаем для типизации:
    ReturnType<typeof rootReducer> извлекает тип, 
    который возвращает функция rootReducer.
*/
export type RootState = ReturnType<typeof rootReducer>

/*тип от setupStore:
    AppStore — это тип самого Redux Store, который возвращает функция setupStore.
    В setupStore вы используете configureStore, который создаёт и настраивает Store. 
    Таким образом, тип AppStore будет типом самого Store,
    содержащим информацию о методах, например, dispatch и getState.
*/
export type AppStore = ReturnType<typeof setupStore>

/*

В TypeScript, при написании AppStore['dispatch'], 
вы извлекаете тип для метода dispatch из типа AppStore. 
Это важно для того, чтобы типизировать dispatch в вашем коде, 
например, в компонентах React.

Почему типизация dispatch может быть полезной?

    Точное указание типов для действий (actions): В Redux Toolkit мы часто создаем действия с помощью createSlice или createAsyncThunk. Эти действия могут иметь различные типы и структуры данных, например, могут быть асинхронными (с использованием createAsyncThunk) или простыми синхронными действиями.

    Когда вы типизируете dispatch как AppDispatch, вы гарантируете, что TypeScript будет знать, какие именно действия могут быть вызваны через dispatch. Это значит, что вы получите:
        Автодополнение действий в редакторе кода.
        Предупреждения от TypeScript, если вы пытаетесь передать неправильный тип данных в действие.

    Например, если вы пытаетесь диспатчить действие, которое не было определено в вашем слайсе, 
    TypeScript сразу подскажет вам ошибку.
*/
//мы используем только те экшны которые мы определили (другие экшны просто не будут приниматься)
export type AppDispatch = AppStore['dispatch']

