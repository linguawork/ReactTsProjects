/**
    Применяем redux-thunk

    Он для асинхронного кода

    суть его в том, что можем принимать dispatch, 
    не импортируя его
*/


//this is the Dispatch for typization 
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/userReducerTypes"
import axios from "axios"


export const fetchUsers = () =>{
        //Dispatch<UserAction>, UserAction is type, which has 3 interfaces, inside which there are enums
        return async(dispatch:Dispatch<UserAction>) => {
        
        try{
            //passing enum values 
            dispatch({type:UserActionTypes.FETCH_USERS })// getting users
            //axios is the library to fetch the data
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            //got users and change the state
            dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:response.data })

        }catch(e){
            //when you catch an error, there should be payload:
            dispatch( {
                type:UserActionTypes.FETCH_USERS, 
                payload: "Error happened when loading users" 
            } )
        }

    }
}

// export const fetchCustomers =()=>{
//     return function (dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => dispatch(addManyCustomersActionCreator(json)))
//     }
// }