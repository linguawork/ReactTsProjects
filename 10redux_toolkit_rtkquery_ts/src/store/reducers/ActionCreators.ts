import { IUser } from "../../types/IUser"
import { AppDispatch } from "../store"
import axios from 'axios'
import {userSlice} from "./userSlice"


/*
Суть ридакс фанк

позволяет прописать в коде dispatch (dispatchHook),
не вызывая сам хук,
и прокинуть в сторонние функции 

*/


// export const fetchCustomers =()=>{
//     return function (dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => dispatch(addManyCustomersActionCreator(json)))
//     }
// }

/*
Код выше для сравнения с redux thunk

В Тулкит redux-thunk идет под капотом и его вручную подключать не надо

*/




//data will be from https://jsonplaceholder.typicode.com/users
// need to install axious to get the json data: npm i axios
export const fetсhUsers = () =>{
        //dispatch нужного типа
    return async function (dispatch:AppDispatch){
         
        try {
            //Slice создает сам action creators, мы можем сразу их задиспатчить
            //то есть не нужно создавать типы, сразу подаем функции из редюсера
            // но через слово actions:
            dispatch(userSlice.actions.usersFetching()) //это попытка сбора данных

            //get will have type: <IUser[]>, будем получать массив пользователей
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        
            //при успешном сборе данныx
            setTimeout( // made a small delay
                ()=>{
                    dispatch(userSlice.actions.usersFetchingSuccess(response.data))  //обработка данных при их успешном поступлении
                },
                500
            )
            
        } catch(e:any) {// e can not accept unknown, Error, so I used any
                //error has the internal message
            dispatch(userSlice.actions.usersFetchingError(e.message)) //error
            
        }
    }
    
}


