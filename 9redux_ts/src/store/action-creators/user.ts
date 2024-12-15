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
        /*
        
            Union Types and dispatch: 
                By typing dispatch as Dispatch<UserAction>, you're telling 
                TypeScript that the dispatch function expects actions that 
                adhere to the UserAction type, which is a union of three 
                different interfaces (FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction).


            This means you can dispatch an object that matches any of 
            the three interfaces, and TypeScript will automatically infer 
            whether the dispatched action is valid based on the type and 
            other properties.

            Dispatching Action Objects: When you call 
            dispatch({ type: UserActionTypes.FETCH_USERS }), 
            you're creating an object. The type property is a string literal 
            defined by the UserActionTypes enum. This object matches one of 
            the action interfaces (FetchUsersAction in this case).

            The reason this works is because actions in Redux (or 
            similar state management systems) are just plain JavaScript objects, 
            and in this case, you're using TypeScript to ensure that 
            these objects match the expected structure (defined by 
            the UserAction union type).
                                 
        */
        
        
        
        return async(dispatch:Dispatch<UserAction>) => {
        
        try{
            //passing enum values 
            dispatch({type:UserActionTypes.FETCH_USERS })// getting users
            //axios is the library to fetch the data
            //if you mistyped the link there should be error message
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            
            //this is to check if the data has the id, so I can use it in list
            // console.log(response)
            
            
            //got users and change the state
            // dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:response.data })

            /*
                setTimeout is used for the imitation of the delay:
                как будто нагруженный сервер

            */
           setTimeout(
            ()=>{
                dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:response.data })
            }, 500
           )


        }catch(e){
            //when you catch an error, there should be payload:
            dispatch( {
                type:UserActionTypes.FETCH_USERS_ERROR, 
                payload: "Error happened when loading users" 
            } )
        }

    }
}

