
/*import 
interface state for state,  
TodoAction for action, 
TodoActionTypes for switch cases 
to pass to Reducer
*/
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todoReducerTypes"

//press ctrl+space to fill the fields
const initialState: TodoState = {
    todos: [], 
    page: 1, 
    error:null, 
    limit: 10, 
    loading: false
}

export const todoReducer = (state = initialState, action:TodoAction): TodoState =>{
    switch(action.type){
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading:true } //
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading:false, todos: action.payload } // data loaded, so false
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading:false, error: action.payload }
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload }

        default:
            return state
    }
}