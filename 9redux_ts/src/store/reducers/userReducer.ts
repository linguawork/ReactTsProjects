/**
 Плюс работы с тайпскриптом, можно отловить ошибку на этапе разработки
 */

//константы нужны для более удобной обработки ошибок
        // const FETCH_USERS = "FETCH_USERS"
        // const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
        // const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
// we can remove them as we use enum



//interface for State and for returning in function
interface userState{
    users:any[],
    loading:boolean,
    error: null | string
}


enum UserActionTypes{
    FETCH_USERS = "FETCH_USERS", 
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS", 
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

}

//as action.payload can have anything, it is better type it
interface FetchUsersAction{
    // type: FETCH_USERS //we can use typeof here, but better off with ENUM
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

//interface for action is not specific for every type of action
//so we dont need it, we go for every enum value
// interface userAction {
//     type: string
//     payload?: any
// }

//type is limited to 3 interfaces
//TYPE has 3 INTERFACES that have ENUM
type UserAction =  FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction


const initialState:userState ={
    users: [], 
    loading: false, //flag to see if it is loading
    error: null //error
}

export const userReducer = (state = initialState, action: UserAction): userState =>{
 
 //commented as we dont use constants, we will change to ENUM
    // switch(action.type){
    //     case FETCH_USERS:
    //         return {loading: true, error:null, users:[]}
    //     case FETCH_USERS_SUCCESS:
    //         return {loading: false, error:null, users:action.payload}
    //     case FETCH_USERS_ERROR:
    //         return {loading: true, error:action.payload, users:[]}
    //     default:
    //         return state
    // }

    switch(action.type){
        //every case has a different typization thanks to TYPE - INTERFACE - ENUM model
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error:null, users:[]}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: true, error: action.payload, users:[]}
        default:
            return state
    }

}