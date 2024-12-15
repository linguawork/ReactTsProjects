
//1 export type for State in Reducer
export interface TodoState{
    todos: any[], 
    loading: boolean, 
    error: null | string, 
    page: number, 
    limit: number
}


//3 export to the reducer
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR', 
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}


interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS, 
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE, 
    payload: number
}

//2 export type for Action in Reducer: type <- interface <- enum
export type TodoAction = 
    FetchTodoAction 
    | FetchTodoSuccessAction 
    | FetchTodoErrorAction 
    | SetTodoPage
    