import React from 'react';
import './App.css';
import { createStore } from 'redux';


const store = createStore()
/* has 3 methods: 
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


function App() {
  return (
    <div className="App">
        Testing
    </div>
  );
}

export default App;
