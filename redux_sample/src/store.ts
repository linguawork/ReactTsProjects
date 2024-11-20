// import { createStore } from 'redux';
//this is deprecated
// now this is used:
// import { configureStore } from '@reduxjs/toolkit';

import { configureStore } from "@reduxjs/toolkit"



/*reducer function can be named in any way, 
    it is better to make it in another file
    takes two params:

(state and action)
    state is prev state
    action is  an event to make the new state
*/





/**
 action is an obj, which has two keys.
 action = {type: "", payload: "?"}, 
 где type: тип действия в строке и payload: данные в строке
 */

/*
type for action
*/

type Action ={
    // type: "ADD_CASH" | "GET_CASH",
    type: "ADD_CASH",
    payload: number
}

/*
    There should be interface for state
*/
interface NotesState{
    cash:number
}

//default state value initialization
const initialState = { 
    cash: 0
}

const reducer = (state:NotesState = initialState, action: Action) =>{

//usually in reducer function there is a switch to choose a state
    switch (action.type){
        case "ADD_CASH": {

            //возвращаем новый обект так как состояние в редаксе неизменямо
            return {
                //передаем старое состояние
                ...state,
                //передаем изменения данные
                cash: state.cash + action.payload
            }
        }
        // case "GET_CASH": {
        //     return {
        //         ...state,
        //         //передаем изменения данные
        //         cash: state.cash - action.payload
        //     }
        // }

        default:
            return state
    }



}




/* store is an object, 
it takes reducer function as the 1st parameter

*/
// const store = configureStore(reducer) 

// Configure the Redux store
const store = configureStore({
    reducer: {
      notes: reducer, // This is the slice of the state controlled by this reducer
    },
  });

export default store



/* store has 3 methods: 
получить состояние - get state:
  1
    const state = store.getState();
    console.log(state);


изменить состояние - dispatch
  2

dispatch(action) - Change the State
    Purpose: This method is used to send an action to the store to modify the state.
    Action: An object describing "what happened" in your app. It typically has a type field (mandatory) and an optional payload (data for the action).
    Example:
    const incrementAction = { type: 'INCREMENT' };
    store.dispatch(incrementAction);
    How It Works:
    When dispatch is called, the store passes the action to the reducer(s).
    Reducers calculate the new state based on the action.
    The store updates its state and notifies subscribers (e.g., React components).
    
подписаться на изменение в состоянии
  3. subscribe(listener) - Listen for State Changes
    Purpose: This method allows you to register a callback function (listener) that runs whenever the state changes.
    Usage: Typically used in non-React environments or for debugging/logging.
    Example:
    javascript
    Copy code
    const unsubscribe = store.subscribe(() => {
      console.log('State changed:', store.getState());
    });

    // Later, you can stop listening by calling:
    unsubscribe();
    How It Works:
    When the state changes (via dispatch), all subscribed listeners are called.
    Each listener gets triggered after the state has been updated.

 */
