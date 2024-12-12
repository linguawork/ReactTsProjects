import { UserAction, userState, UserActionTypes } from "./9redux_ts/src/types/userReducerTypes";


        /*
        THESE TYPES AND INTERFACES ARE SAVED IN TYPES FOLDER
        HERE I WILL COMMENT THEM FOR READING COMMENTS
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

        */


interface UserState{
    users:any[],
    loading:boolean,
    error: null | string
}

// interface UserState {
//     // Define the shape of your user state
//     id: string;
//     name: string;
//   }
  
  interface RootState {
    user: UserState | null;  // Adjust if your user state can be null or undefined
  }
  
  // Example of rootReducer with the correct state typing
  export const rootReducer = (state: RootState = { user: null }, action: UserAction): RootState => {

    //every case has a different typization thanks to TYPE - INTERFACE - ENUM model
    switch (action.type) {
    case UserActionTypes.FETCH_USERS:
        return {user: {loading: true, error:null, users:[]}}
    case UserActionTypes.FETCH_USERS_SUCCESS:
        return {user: {loading: false, error: null, users: action.payload}}
    case UserActionTypes.FETCH_USERS_ERROR:
        return {user: {loading: true, error: action.payload, users:[]}}
    default:
        return state
  }
}