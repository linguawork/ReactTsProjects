import { IUser } from "../../types/IUser"
import { AppDispatch } from "../store"
import axios from 'axios'


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
    
    return async function (dispatch:AppDispatch){

        try {
            //get will have type: <IUser[]>, будем получать массив пользователей
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users",
        } catch (e) {
            
        }
    }
    
}