/*
These are the types and interfaces from userReducer without comments

the neccessary ones are exported

*/

//interface for State and for returning in function
export interface userState{
    users:any[],
    loading:boolean,
    error: null | string
}


export enum UserActionTypes{
    FETCH_USERS = "FETCH_USERS", 
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS", 
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction{
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS, 
    payload: any[] // array of anytype
}

interface FetchUsersErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR, 
    payload: string 
}


//TYPE has 3 INTERFACES that have ENUM
export type UserAction =  FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

