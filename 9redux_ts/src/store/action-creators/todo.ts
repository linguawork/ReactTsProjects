/**
    Применяем redux-thunk
    Он для асинхронного кода
    суть его в том, что можем принимать dispatch, 
    не импортируя его

    The code here is written in the same manner as in user.ts
*/


//this is the Dispatch for typization 
import { Dispatch } from "redux"
import axios from "axios"
import { TodoAction, TodoActionTypes } from "../../types/todoReducerTypes"


//Это первый фетч (Автор называет его action), который заберет себе хук useActions
//passing page and limit
export const fetchTodos = (page = 1, limit =10) =>{
      
        return async(dispatch:Dispatch<TodoAction>) => {
        
        try{
            //passing enum values as CONSTANTs
            dispatch({type: TodoActionTypes.FETCH_TODOS })// getting todos 
            //axios is the library to fetch the data
            //if you mistyped the link there should be error message
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", 
                /*
                    In summary:

                    The second parameter is an options object {}, 
                    and specifically the params property within it adds query parameters to the URL, 
                    which are included in the HTTP request to control things like pagination, 
                    filtering, or sorting on the server side. 
                    In this case, it adds _page and _limit as query parameters to the URL.
                    
                    Example:
                    If page = 2 and limit = 10, the resulting URL would be: 
                    https://jsonplaceholder.typicode.com/todos?_page=2&_limit=10

                */
                {params: {_page:page, _limit: limit} } )
            
 
           setTimeout(
            ()=>{
                dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS, payload:response.data })
            }, 500
           )


        }catch(e){
            //when you catch an error, there should be payload:
            dispatch( {
                type:TodoActionTypes.FETCH_TODOS_ERROR, 
                payload: "Error happened when loading users" 
            } )
        }

    }
}


//another action, which return an object with type, and a current page payload
// for changing page (32:29)
//we dont use dispatch here, as we will export it to useActions hook,
// which will attach dispatch function
export function setTodoPage(page: number){
    return { type: TodoActionTypes.SET_TODO_PAGE,  payload: page } 

}
