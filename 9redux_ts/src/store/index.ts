import {applyMiddleware, createStore} from 'redux'

import { rootReducer } from './reducers'
import { thunk } from 'redux-thunk'//never forget {} for thunk


export const store = createStore(rootReducer, applyMiddleware(thunk))