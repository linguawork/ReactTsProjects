
/* 

In Redux Toolkit, a slice is a fundamental concept that simplifies 
the Redux state management process. It allows you to define a piece (or "slice") 
of the Redux state along with the actions and reducers that operate on that state.
The slice provides a streamlined and organized way to handle state, actions,
and reducers in Redux.

Key Features of a Slice:

    State: A slice contains a specific part of the global state.
    Reducers: A slice automatically generates reducers based on the provided functions.
    Actions: The slice automatically generates action 
    creators based on the reducer functions.


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter', // A unique name for the slice
  initialState, // Initial state for this slice
  reducers: { // Reducer functions that update the state
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;




Explanation:

    createSlice: This is a function from Redux Toolkit that allows you to create 
    a slice of state. It accepts an object that defines:
        name: The name of the slice, which is used to prefix actions.

        initialState: The initial value of the state for that slice.

        reducers: An object where each key is a function that updates 
        the state based on a specific action. The function's argument 
        is the current state, and it modifies the state directly (mutating it)
         — Redux Toolkit uses the Immer library internally, which allows this 
         "mutation" to work in an immutable way.

    Reducers: The reducer functions define how the state should change in response 
     to actions. 
    The functions can access the current state and mutate it directly, 
    thanks to IMMER (look at screenshots in the root, она идет под копотом в ReduxToolkit), which makes the code more concise and easier to manage.

    Actions: Each function defined inside reducers automatically 
    generates an action creator. You can export these action creators 
    using counterSlice.actions, as seen in the example with increment, 
    decrement, and incrementByAmount.

    Reducer: The reducer exported from the slice is the default export and 
    is used to update the state for that slice when dispatched.

Benefits of Slices:

    Simplifies Code: Slices reduce boilerplate code. You don’t need to manually write action 
    types, action creators, or separate reducers.
    Encapsulates Logic: Each slice is focused on one part of the state, 
    making it easier to maintain and organize your Redux logic.
    Better Developer Experience: Redux Toolkit provides tools like Immer, 
    which allows direct mutation of state, and automatically handles the 
    creation of action creators and reducers.

    Summary:

A slice in Redux Toolkit is a way to define a part of the Redux state, along with the actions and reducers that manage that state. The createSlice function simplifies Redux logic by automatically generating action creators, reducers, and types for you. It promotes a more organized, concise, and maintainable codebase in Redux applications.

*/

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";


interface UserState {
    users: IUser[],
    isLoading:boolean, 
    error:string, 
    count: number
}

//6:16
const initState:UserState = {
    users: [],
    isLoading: false, 
    error:' ', 
    count: 0
}

export const userSlice = createSlice(
    {
        name: 'user', 
        initialState: initState, 
        //каждый reducer будет, как отдельный case in switch в предыдущих версиях redux
        reducers:{
        //типизация action: PayloadAction (imported)
          increment(state, action: PayloadAction<number>){
            /*action внедряется библиотекой IMMER под капотом 
            Ни action, ни actionCreator, ни type 
            не нужно создавать вручную как раньше, все делает редакс тулкит 

            */
            state.count += action.payload
          }    
        }
    }
)

/*
  The reducer exported from the slice is the default export and 
  is used to update the state for that slice when dispatched.

    In userSlice.js, export default userSlice.reducer exports the reducer as the default export from that file.
    In another file, you import it as userReducer by using import userReducer from './reducers/userSlice'.
    This works because you are exporting the reducer as the default from userSlice.js, and when importing, you can give it any name you want (like userReducer).

  This keeps the names flexible while ensuring that the default export is correctly imported.
*/

//если экспортируем как default, то можем изменять имя при импорте
export default userSlice.reducer;
